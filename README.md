# 🌽 San Choclito - Sistema de Gestión de Restaurante

## 📖 Descripción del Sistema
El **Panel de Control San Choclito** es una aplicación web Frontend diseñada para optimizar y gestionar las operaciones diarias de un restaurante. El sistema permite la administración integral del menú, el registro de pedidos por mesa, la visualización de órdenes en cocina y la facturación. 

Todo el sistema está diseñado bajo una interfaz de usuario uniforme, responsiva e intuitiva, asegurando una experiencia fluida. Este proyecto fue desarrollado como parte de la evaluación parcial del curso de Desarrollo Web (Ciclo 2026-1).

## 📸 Fotografía del Equipo

<div align="center">
  <img src="ruta/a/tu/foto-equipo.jpg" alt="Fotografía del Equipo San Choclito" width="600" style="border-radius: 10px;">
  <br>
  <i>De izquierda a derecha: [Nombre 1], [Nombre 2], [Nombre 3] y [Nombre 4].</i>
</div>

---

## 👨‍💻 Integrantes

| Foto | Nombre | Módulo Principal |
| :---: | :--- | :--- |
| <img src="ruta/a/tu/foto-junior.jpg" width="80" style="border-radius:50%"> | **Junior Moises Aliaga Cueva** | Módulo de Pedidos e Integración UI |
| <img src="ruta/a/foto-integrante2.jpg" width="80" style="border-radius:50%"> | **[Nombre Integrante 2]** | Módulo de Platos |
| <img src="ruta/a/foto-integrante3.jpg" width="80" style="border-radius:50%"> | **[Nombre Integrante 3]** | Módulo de Cocina |
| <img src="ruta/a/foto-integrante4.jpg" width="80" style="border-radius:50%"> | **[Nombre Integrante 4]** | Módulo de Facturación |

---
## 🧩 Módulos Desarrollados

El proyecto se divide en 4 módulos principales que se comunican entre sí mediante el almacenamiento local (`localStorage`):

1. **Gestión de Platos:** Registro, edición y eliminación de ítems del menú. Permite establecer categorías, precios, tiempo estimado de preparación, control de alérgenos y estado (Activo/Inactivo).
2. **Registro de Pedidos:** Interfaz para que los mozos asignen pedidos a mesas específicas. Cuenta con un carrito dinámico, cálculo automático del total, justificación obligatoria para pedidos urgentes y selección de niveles de prioridad.
3. **Panel de Cocina:** Visualización en tiempo real de los pedidos enviados por los mozos. Permite a los cocineros cambiar el flujo de los platos (En preparación, Listo para servir).
4. **Facturación y Cierre:** Módulo para el cobro final de las mesas, generación de comprobantes y resumen estadístico de las ventas del día.

---

## 🛠️ División de Responsabilidades

Para asegurar una entrega eficiente y ordenada con control de versiones, el equipo distribuyó el trabajo de la siguiente manera:

* **Junior Moises Aliaga Cueva:** Desarrollo lógico y visual del **Módulo de Pedidos**. Encargado de la lógica matemática del carrito, validación de prioridades y estandarización del diseño global (CSS) para asegurar la uniformidad en todo el sistema.
* **[Nombre Integrante 2]:** Estructuración y lógica del **Módulo de Platos**. Creación del CRUD base para alimentar la carta del restaurante.
* **[Nombre Integrante 3]:** Desarrollo interactivo del **Módulo de Cocina**. Manejo de arrays en JavaScript para actualizar y filtrar el estado de las órdenes.
* **[Nombre Integrante 4]:** Implementación del **Módulo de Facturación**. Cálculos finales y cierre de procesos.

---

## 🚀 Instrucciones para Ejecutar el Proyecto

Dado que es un proyecto **Frontend** desarrollado con HTML5, CSS3 y Vanilla JavaScript, no requiere de la instalación de dependencias, servidores complejos ni bases de datos externas.

**Paso a paso:**

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/san-choclito.git](https://github.com/tu-usuario/san-choclito.git)
