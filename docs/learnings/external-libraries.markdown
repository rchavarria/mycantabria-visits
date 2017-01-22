# Cómo usar librerías externas

*Este manual está todavía en proceso*

Es muy fácil usar componentes que vienen con Angular2: importas y listo. Pero la cosa se complica un poco cuando tienes que usar una librería externa, y que además no tiene definiciones de tipos para TypeScript.

Aquí describo cómo puede hacerse.

- Instalar la dependencia con `npm`
- Modificar fichero XXX para indicar a TypeScript dónde existe la librería. Con este paso, le decimos a TypeScript que no de un fallo de compilación cuando intentemos importar un tipo de la librería, y que además `webpack` sea capaz de empaquetar nuestra librería para que podamos utilizarla en nuestra applicación web.
- Importar la dependencia que queramos de la librería
- Usar libremente

