# Curso de Backend con Node.js: API REST con Express.js

## Introducción

### ¿Qué es Express.js?

Express.js, o simplemente Express, es un framework de aplicación web para construir API REST completas con Node.js, lanzado como software libre y de código abierto debajo de la Licencia MIT. Está diseñado para construir aplicaciones web y API. 

### Configuración del entorno de desarrollo para este curso

Crear carpeta:

`mkdir my-store`

Ingresamos a la carpeta que acabamos de crear:

`cd my-store`

Luego abrir con VSC:

`code .`

### Creación de archivos necesarios

Para crear un archivo package.json, en la línea de comandos, en el directorio raíz de tu proyecto Node.js, ejecuta:

`npm init -y`

Inicializamos el repositorio:

`git init`

Renombramos nuestra rama principal:

`git branch -m main`

- .gitignore : para ingorar ciertas carpertas y archivos.
- .eslintrc.json: para las reglas de buenas practicas.
- .editorconfig: para configurar nuestro editor.
- index.js
- En VSC instalar el plugin Editor Config

### Contenido de los archivos
- .gitignore

Abrir link de configuraciones https://www.toptal.com/developers/gitignore/
para generar contenido del archivo '.gitignore' `Node, Windows, Linux, MacOs`

- .editorconfig: Escribir el siguiente codigo.

```
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.js]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false

```

- slintrc.json : Escribimos el siguiente código.

```
{
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "extends": [
    "eslint:recommended",
    "prettier"
  ],
  "env": {
    "es6": true,
    "node": true,
    "jest": true
  },
  "rules": {
    "no-console": "warn"
  }
}

```


Instalar dependencias de desarrollo y el servidor:

`npm i nodemon eslint eslint-prettier eslint-plugin-prettier prettier -D`

package.json : editamos la sección "scripts"
 ```
"scripts":{
  "dev":"nodemon index.js",
  "start":"node index.js",
  "lint":"eslint"
}
```

Una vez terminado de instalar, vamos  a probar nuestro
entorno de desarrollo y producuión.

`npm run dev`

Prueba en modo producción:

`npm run start`

## Instalación de Express.js y tu primer servidor HTTP

Instalaremos Express.js con el siguiente comando:
`npm i express`

## ¿Qué es una RESTful API?

__Significa Representational State Transfer o transferencia de estado representacional__ (REST)

RESTful API es una interfaz que dos sistemas de computación utilizan para intercambiar información de manera segura a través de Internet utilizando HTTP como protocolo de comunicación.

Veamos sus métodos:
- GET: con get podemos obtener, solicitar información.
- PUT: lo que hace es trabajar en actualizaciones de toda la data de una tabla.
- PATCH: permite actualizar un solo campo de la tabla.
- POST: permite crear productos, categorías, etc.
- DELETE: sirve para eliminar datos. 

| Method | /products | /products/{id}|
| -------| ----------|---------------|
| GET    | Get list  | Get           |
| PUT    | Replace * | Update/Replace|
| PATCH  | No apply  | Update        |
| Post   | Create    | No apply      |
| DELETE | Delete *  | Delete        |

(*) Utilizar con mucha cautela.


## CRUD

Instalamos la librería que nos genera data fake, la dependecnai se llama __faker__

`npm install @faker-js/faker --save-dev`

### Instalación de Insomnia en Windows y Mac

La instalación es sencilla, solo tienes que ingresar a [https://insomnia.rest/download](https://insomnia.rest/download) y descargar el instaldor.

### Instalación de Postman en Windows y Mac
La instalación es sencilla, solo tienes que ingresar a [https://www.postman.com/downloads](https://www.postman.com/downloads) y descargar el instaldor.

### Instalación Postman en Linux

- Debian, Ubuntu y derivados

  `sudo apt install postman`

- Arh, Manjaro

  `sudo pacman -S postman`

- Fedora 

  `sudo yam install postman`

## Servicios

Introducción a servicios

Crear, editar y eliminar

Async awit y captura de errores


## Middlewares

### ¿Qué son las middlewares? 

Middleware es software que se sitúa entre un sistema operativo y las aplicaciones que se ejecutan en él. Básicamente, funciona como una capa de traducción oculta para permitir la comunicación y la administración de datos en aplicaciones distribuidas. A veces, se le denomina “plumbing” (tuberías), porque conecta dos aplicaciones para que se puedan pasar fácilmente datos y bases de datos por una “canalización”. El uso de middleware permite a los usuarios hacer solicitudes como el envío de formularios en un explorador web o permitir que un servidor web o permitir que un servidor web devuelva páginas web dinámicas en función del perfil de un usuario.

Fuente [https://azure.microsoft.com/es-es/resources/cloud-computing-dictionary/what-is-middleware](https://azure.microsoft.com/es-es/resources/cloud-computing-dictionary/what-is-middleware)

Estructura lógica de los middlewares

```jsx
function (req, res, next){
  if (something){
    res.send('end')
  } else{
    next()
  }
}
```
Middleware de tipo error

```jsx
function (error, req, res, next){
  if (error){
    res.status(500).json({error})
  }else{
    next()
  }
}

```

Cuáles son sus casos de uso:

- Funcionar como pipes
- Validar datos
- Capturar errores
- Validar permisos
- Controlar accesos

### Manejo de errores con Boom

Instalamos la librería Boom
  `npm i @hapi/boom`


### Validación de datos con Joi

Instalamos Joi

  `npm i joi`
  `npm install --save joi`
  `npm install --save-dev @types/joi`

  Fuente: [https://duprez.medium.com/validación-con-joi-y-nestjs-f11cc32dbf4b](https://duprez.medium.com/validación-con-joi-y-nestjs-f11cc32dbf4b)


## Middlewares populares en Express.js

A continuación te compartiré una lista de los middlewares más populares en Express.

### CORS

Middleware para habilitar CORS (Cross-origin resource sharing) en nuestras rutas o aplicación. [http://expressjs.com/en/resources/middleware/cors.html](http://expressjs.com/en/resources/middleware/cors.html)

### Morgan

Un logger de solicitudes HTTP para Node.js. [http://expressjs.com/en/resources/middleware/morgan.html](http://expressjs.com/en/resources/middleware/morgan.html)

### Helmet

Helmet nos ayuda a proteger nuestras aplicaciones Express configurando varios encabezados HTTP. ¡No es a prueba de balas de plata, pero puede ayudar! [https://github.com/helmetjs/helmet](https://github.com/helmetjs/helmet)

### Express Debug

Nos permite hacer debugging de nuestras aplicaciones en Express mediante el uso de un toolbar en la pagina cuando las estamos desarrollando. [https://github.com/devoidfury/express-debug](https://github.com/devoidfury/express-debug)

### Express Slash

Este middleware nos permite evitar preocuparnos por escribir las rutas con o sin slash al final de ellas. [https://github.com/ericf/express-slash](https://github.com/ericf/express-slash)

### Passport

Passport es un middleware que nos permite establecer diferentes estrategias de autenticación a nuestras aplicaciones. [https://github.com/jaredhanson/passport](https://github.com/jaredhanson/passport)

Puedes encontrar más middlewares populares en el siguiente enlace:

[http://expressjs.com/en/resources/middleware.html](http://expressjs.com/en/resources/middleware.html)


## Deployment

### Consideraciones para producción

- Cors
- Https
- procesos de Build
- Remover logs
- Seguridad (Helmet)
- Testing

### Instalación de cors

  ´npm i cors´
