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