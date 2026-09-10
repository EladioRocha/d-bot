# d-bot

Bot sencillo de Discord con discord.js 14. Cuando recibe el mensaje exacto `Hola`, responde con un saludo al autor.

## Estructura

- [index.js](index.js)

## Preparación y uso

Configura `DISCORD_CLIENT_TOKEN` en un `.env` local. Habilita el intent Message Content para el bot en Discord, invítalo a un servidor de pruebas y dale acceso al canal. Al ejecutar el programa, enviar `Hola` debe producir un saludo.

### Raíz del repositorio

Requiere Node.js. Este paquete no fija una versión del runtime; valida compatibilidad con las dependencias antes de actualizarlo.

```sh
npm ci
npm run start
```

Comandos declarados en [package.json](package.json):

| Comando | Acción |
| --- | --- |
| `npm run start` | `node index.js` |

## Configuración detectada en el código

Estas son referencias explícitas a variables de entorno, no una garantía de que toda la configuración esté externalizada. Los nombres y archivos permiten localizar dónde se usan; los valores deben corresponder a tu entorno.

| Variable | Referencia |
| --- | --- |
| `DISCORD_CLIENT_TOKEN` | [index.js](index.js) |

No guardes credenciales reales en la documentación. Si hay `.env.example`, úsalo como referencia y revisa cómo carga la configuración el punto de entrada.

## Validación y estado

Esta guía se contrastó con el árbol de archivos y los manifiestos del repositorio. No se ha validado una ejecución completa contra servicios externos, bases de datos o hardware. Las versiones y los scripts mostrados describen el código actual; no implican que sus dependencias antiguas sigan siendo compatibles.
