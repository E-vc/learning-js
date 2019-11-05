## JavaScript in depth

## DOM

El **Modelo de Objetos del Documento (DOM)** es una API de documentos HTML y XML. Proporciona una representación estructural del documento, permitiendo la modificación de su contenido o su presentación visual. Esencialmente, comunica las páginas web con los scripts o los lenguajes de programación.

**DOM** es un estándar del W3C.

![1569768854215](C:\Users\Admin\AppData\Roaming\Typora\typora-user-images\1569768854215.png)

**Documentación oficial:** https://developer.mozilla.org/es/docs/DOM

## BOM

El **Modelo de Objetos del Navegador (BOM)** permite que JavaScript 'hable' con el navegador.

**Documentación actual:** https://www.w3schools.com/js/js_window.asp

## Events

Los eventos se envían para notificar al código de cosas interesantes que han ocurrido. Cada evento está representado por un objeto que se basa en la interfaz **Event**, y puede tener campos y/o funciones personalizadas adicionales para obtener más información acerca de lo sucedido. Los eventos pueden representar cualquier cosa desde interacciones básicas del usuario para notificaciones automatizadas de las cosas que suceden en el modelo de representación.

**Documentación oficial:** https://developer.mozilla.org/es/docs/Web/Events

## JSON

**JSON (JavaScript Object Notation)** es un formato ligero de intercambio de datos. Es fácil de leer y escribir, además es fácil de analizar y generar por una máquina.

**Documentación oficial:** http://json.org/

## LocalStorage

Es una propiedad que permite acceder al objeto local **Storage**; los datos persisten almacenados entre las diferentes sesiones de navegación. Estos datos no tienen fecha de expiración. Las claves y los valores son siempre cadenas de texto, (tener en cuenta que, al igual que con los objetos, las claves de enteros se convertirán automáticamente en cadenas de texto).

**Documentación oficial:** https://developer.mozilla.org/es/docs/Web/API/Window/localStorage

## Request Asynchronous

Son comunicaciones asincrónicas, tienen mejor rendimiento. Se recibe una devolución de llamada cuando se hayan recibido los datos. Esto permite que el navegador continúe funcionando normalmente mientras se procesa su solicitud.