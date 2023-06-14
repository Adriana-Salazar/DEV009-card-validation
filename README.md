# Tarjeta de crédito válida

## Índice

- [1. Presentación del Proyecto](#1-presentación-del-Proyecto)
- [2. Presentación de la Página](#2-presentación-de-la-página)
- [3. Objetivo de la Página](#3-Objetivo-de-la-Página)
- [4. Usuarios Principales](#4-Usuarios-Principales)
- [5. Objetivos de los Usuarios](#5-Objetivos-de-los-Usuarios)
- [6. Resolución de Problemas](#6-Resolución-de-Problemas)
- [7. Funcionalidad de la Página](#7Funcionalidad-de-la-Página)
- [8. Uso](#8-Uso)
- [9. Herramientas utilizadas](#9-Herramientas-utilizadas)

---

# Presentación del Proyecto

Este proyecto consiste en una aplicación web que permite validar números de tarjeta de crédito utilizando el algoritmo de Luhn. El algoritmo de Luhn, también conocido como algoritmo de módulo 10, es utilizado para verificar la integridad de los números de identificación, como los números de tarjetas de crédito.

Los usuarios esperan poder ingresar un número de tarjeta y recibir una respuesta clara sobre su validez. Además, desean tener la opción de proporcionar su nombre y apellido para completar un formulario de pago o registro.

![Algoritmo de Luhn](/DEV009-card-validation/src/images/Algoritmo.png)

---

# Presentación de la Página

En este proyecto se simuló una página web que permite validar números de tarjetas de crédito y débito para realizar una afiliación a una compañía telefónica. Los usuarios podrán ingresar el número de su tarjeta de débito/crédito, constatar su validez y luego ingresar sus nombres y apellidos para completar el proceso de afiliación.

## Objetivo de la Página

El objetivo de esta página web es brindar a los usuarios una herramienta sencilla para verificar la validez de sus números de tarjeta de crédito y completar el proceso de afiliación de un plan telefónico. La página web presenta una interfaz intuitiva y fácil de usar, junto con una lógica de validación para garantizar la precisión de los datos ingresados.

## Usuarios Principales

Los principales usuarios de este producto son personas que desean afiliarse a RCR Telephony y contratar un plan telefónico. Estos usuarios pueden ser clientes potenciales que buscan una solución de telefonía móvil o usuarios existentes que deseen cambiar su plan actual.

## Objetivos de los Usuarios

Los objetivos de los usuarios en relación con este producto son:

1. Validar si su número de tarjeta de crédito es válido antes de continuar con la afiliación.
2. Seleccionar un plan telefónico que se ajuste a sus necesidades y preferencias.
3. Proporcionar sus nombres y apellidos para completar el proceso de afiliación.

## Resolución de Problemas

El producto que se está creando resuelve los siguientes problemas de los usuarios:

1. Verificación de la validez de la tarjeta: El código implementa un algoritmo de validación de tarjetas de crédito que utiliza el algoritmo de Luhn para verificar si el número de tarjeta ingresado es válido. Esto ayuda a los usuarios a evitar errores al proporcionar su información de pago y garantiza la precisión de la afiliación.

2. Facilidad de uso: La interfaz de la página web es intuitiva y fácil de usar. Los usuarios solo necesitan ingresar su número de tarjeta y hacer clic en el botón de validación. También se les solicita ingresar sus nombres y apellidos para completar el proceso de afiliación. Esto garantiza una experiencia de usuario fluida y sin complicaciones.

3. Retroalimentación: El resultado de la validación de la tarjeta se muestra de forma clara en la página. Si la tarjeta es válida, se proporciona un mensaje junto con el número de tarjeta enmascarado. Si la tarjeta es inválida, se muestra un mensaje indicando que la tarjeta es inválida. Esto permite a los usuarios comprender rápidamente el estado de su tarjeta y tomar las acciones necesarias.

## Funcionalidad de la Página

La página web ofrece las siguientes funcionalidades:

1. Selección de plan telefónico: Los usuarios pueden elegir entre tres planes telefónicos diferentes que se presentan visualmente en forma de imágenes. Esto les permite seleccionar el plan que mejor se adapte a sus necesidades.

2. Validación de tarjeta de crédito/débito: Los usuarios pueden ingresar el número de su tarjeta de débito/crédito y hacer clic en el botón de validación. El código verifica si el número de tarjeta es válido utilizando el algoritmo de Luhn y muestra el resultado en la página.

3. Ingreso de nombres y apellidos: Una vez validada la tarjeta, se le pide al usuario que ingrese sus nombres y apellidos para completar el proceso de afiliación. Los campos de nombres y apellidos son obligatorios y se realiza una validación básica para asegurarse de que estén completos y asegurar así el envío del formulario para su correspondiente afiliación.

A continuación se muestra la vista final de la página web:

![Página web](/DEV009-card-validation/src/images/paginaweb.png)

## Uso

1. Abre el archivo `index.html` en tu navegador web.

2. En la sección "Introduce el número de tu Tarjeta Débito/Crédito", ingresa el número de tarjeta que deseas validar. Asegúrate de ingresar solo caracteres numéricos (dígitos) en la tarjeta a validar [0-9].

3. Haz clic en el botón "Validar" para verificar si el número de tarjeta es válido.

4. Verás el resultado de la validación en la sección "Resultado". Si el número de tarjeta es válido según el algoritmo de Luhn, se mostrará un mensaje indicando que es válido. De lo contrario, se mostrará un mensaje indicando que no es válido.

## Herramientas utilizadas

Para desarrollar este proyecto se utilizaron las siguientes herramientas y tecnologías:

- HTML: Para estructurar el contenido de la página web, se creo una interfaz de usuario simple y fácil de usar.

- CSS: Para aplicar estilos y diseñar la interfaz de usuario.

- JavaScript: Para agregar funcionalidad:
-     El algoritmo de Luhn se ha implementado en el archivo `validator.js`.
-     Se ha agregado la función Maskify para ocultar todos los dígitos del número de tarjeta, excepto los últimos cuatro.
-     Se ha agregado una validación de entrada para asegurarse de que el campo de número de tarjeta no esté vacío antes de realizar la validación e igualmente e igualmente en los campos "Nombres" y ""Apellidos" del formulario.
- Canva: para diseñar imágenes y paleta de colores, la cual se seleccionó para proporcionar una apariencia atractiva y legible en la página web. Igualmente se ocupó esta herramienta para diseñar el Prototipo de alta fidelidad

  ![Prototipo de alta fidelidad](/DEV009-card-validation/src/images/Prototipo.png)
