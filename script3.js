const KEY_PEDIDOS = 'sc_pedidos';

document.addEventListener('DOMContentLoaded', () => {
    renderTablero();
    // Escuchar cambios de filtros
    document.getElementById('filtroEstado').addEventListener('change', renderTablero);
    document.getElementById('filtroPrioridad').addEventListener('change', renderTablero);
});

function renderTablero() {
    const grid = document.getElementById('gridCocina');
    const pedidos = JSON.parse(localStorage.getItem(KEY_PEDIDOS) || '[]');
    const fEstado = document.getElementById('filtroEstado').value;
    const fPrio = document.getElementById('filtroPrioridad').value;

    grid.innerHTML = '';

    const filtrados = pedidos.filter(p => {
        const esActivo = ['Enviado a cocina', 'En preparación'].includes(p.estado);
        const matchE = fEstado === 'todos' || p.estado === fEstado;
        const matchP = fPrio === 'todos' || p.prioridad === fPrio;
        return esActivo && matchE && matchP;
    });

    if (filtrados.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No hay pedidos en cocina.</p>';
        return;
    }

    filtrados.forEach(pedido => {
        const todosListos = pedido.platos.every(pl => pl.estadoCocina === 'Listo para servir');
        const card = document.createElement('div');
        card.className = `card-pedido ${pedido.prioridad === 'Urgente' ? 'urgente' : ''}`;

        card.innerHTML = `
            <!-- 1. DATOS DEL PEDIDO -->
            <div class="info-principal">
                <div class="pedido-header-row">
                    <span>#${pedido.codigo}</span>
                    <span>Mesa: ${pedido.mesa}</span>
                </div>
                <span class="mozo-tag"><b>Mozo:</b> ${pedido.mozo}</span>
                <span class="mozo-tag"><b>Hora:</b> ${pedido.fecha}</span>
                <span class="mozo-tag"><b>Prioridad:</b> ${pedido.prioridad}</span>
                ${pedido.prioridad === 'Urgente' ? `<div class="alerta-cocina alerta-alergeno">MOTIVO: ${pedido.justificacion || 'URGENTE'}</div>` : ''}
            </div>

            <!-- 2. LISTA DE PLATOS Y ALERTAS -->
            <div class="lista-platos">
                ${pedido.platos.map((pl, idx) => {
                    const status = pl.estadoCocina || 'Pendiente';
                    const isListo = status === 'Listo para servir';
                    const isPrep = status === 'En preparación';

                    return `
                    <div class="item-plato">
                        <div class="plato-main-info">
                            <span class="plato-nombre">${pl.cantidad}x ${pl.nombre}</span>
                            <small>(${status})</small>
                        </div>
                        
                        <!-- REGLA: Mostrar observaciones y alérgenos debajo del nombre -->
                        ${pl.obs ? `<span class="alerta-cocina alerta-obs">OBS: ${pl.obs}</span>` : ''}
                        ${pl.alergenos && pl.alergenos.length > 0 ? 
                            `<span class="alerta-cocina alerta-alergeno">⚠️ ALÉRGENOS: ${pl.alergenos.join(', ')}</span>` : ''}
                        
                        <!-- 3. BOTONES DE ACCIÓN POR PLATO AL FINAL DEL PLATO -->
                        <div class="controles-plato">
                            ${!isPrep && !isListo ? 
                                `<button class="btn-cambio-estado btn-preparar" onclick="cambiarEstadoPlato('${pedido.codigo}', ${idx}, 'En preparación')">Cocinar</button>` : ''}
                            
                            ${!isListo ? 
                                `<button class="btn-cambio-estado btn-listo" onclick="cambiarEstadoPlato('${pedido.codigo}', ${idx}, 'Listo para servir')">Listo</button>` : 
                                '<b style="color:green; font-size:0.8rem">✓ TERMINADO</b>'}
                        </div>
                    </div>`;
                }).join('')}
            </div>

            <!-- 4. FOOTER CON TIEMPO Y BOTÓN FINAL -->
            <div class="footer-card">
                <p style="font-size:0.8rem; margin-bottom:10px;"><b>Tiempo estimado:</b> 20 min</p>
                <button class="btn-finalizar-orden" 
                        ${!todosListos ? 'disabled' : ''} 
                        onclick="finalizarPedidoCompleto('${pedido.codigo}')">
                    ${todosListos ? 'NOTIFICAR: LISTO PARA SERVIR' : 'PLATOS PENDIENTES'}
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ... (Funciones cambiarEstadoPlato y finalizarPedidoCompleto se mantienen igual)
function cambiarEstadoPlato(cod, idx, nuevo) {
    let pedidos = JSON.parse(localStorage.getItem(KEY_PEDIDOS));
    const p = pedidos.find(x => x.codigo === cod);
    p.platos[idx].estadoCocina = nuevo;
    if(nuevo === 'En preparación') p.estado = 'En preparación';
    localStorage.setItem(KEY_PEDIDOS, JSON.stringify(pedidos));
    renderTablero();
}

function finalizarPedidoCompleto(cod) {
    let pedidos = JSON.parse(localStorage.getItem(KEY_PEDIDOS));
    const p = pedidos.find(x => x.codigo === cod);
    p.estado = 'Listo para servir';
    localStorage.setItem(KEY_PEDIDOS, JSON.stringify(pedidos));
    renderTablero();
}