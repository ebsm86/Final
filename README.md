# Final
# Cypress Automation Testing - SauceDemo

Este proyecto contiene pruebas automatizadas para el sitio web SauceDemo, que simula un entorno de comercio electrónico para demostrar las capacidades de pruebas de Cypress.

## Configuración del Proyecto

Para comenzar, asegúrate de tener instalado Node.js y npm. Luego, clona este repositorio y ejecuta `npm install` para instalar las dependencias.

## Estructura del Proyecto

El proyecto sigue la metodología Page Object Model (POM) para mejorar el mantenimiento y la reusabilidad del código. Los elementos de la página y las acciones se encapsulan dentro de clases de objetos de página.

La estructura de directorios es la siguiente:
cypress/ ├── fixtures │ └── example.json ├── integration │ └── Page │ ├── cart.spec.js │ ├── checkout.spec.js │ ├── inventory.spec.js │ └── login.spec.js ├── pageObjects │ ├── cartPage.js │ ├── checkoutPage.js │ ├── inventoryPage.js │ └── loginPage.js ├── plugins │ └── index.js └── support ├── commands.js └── index.js

## Pruebas Implementadas

- **Login**: Pruebas automatizadas para el formulario de inicio de sesión, incluyendo validaciones para usuarios y contraseñas incorrectas.

- **Catálogo de Productos**: Pruebas para el listado de productos, incluyendo la verificación de imágenes, títulos y precios.

- **Carrito de Compras**: Pruebas para la funcionalidad del carrito de compras, asegurando que los productos se añadan y eliminen correctamente.

- **Checkout**: Pruebas para los formularios de checkout, incluyendo la validación de campos requeridos y la página de confirmación de compra.

- **End-to-End (E2E)**: Flujo completo de compra de al menos 3 artículos desde el inicio de sesión hasta la confirmación de la compra.

## Ejecución de Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:


npx cypress open