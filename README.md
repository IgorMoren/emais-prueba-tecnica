# EmaisPruebaTecnica
## Por: Igor Moreno Alonso

## Objetivos

- Desarollo de una aplicación web en la que se mostrara:

Listado de peliculas mostradas mediante un buscador.
Una seccion con las peliculas favoritas seleccionadas mediante un boton

## Descripcion del proyecto

Tecnologias utilizadas:
- HTML, SCSS, TypeScript

Framework utilizado:
- Angular v.14

Librerias  utilizadas:
- RxJs
- Angular material para los componentes

### Justificacion:
#### Angular:
- Se ha optado por la utilizacion de el framework de angular debido a que es ell framework con el que masa comodo me encuentro trabajando actualmente.

#### Angular Material:
- He basado la creacion de mis componentes en la libreria de componentes Angular Material. Debido a su facilidad de uso de cara a centrar el tiempo de la realizacion de la prueba en aspectos maas tecnicos.

## Arquitectura:

El proyecto se organizado de la siguiente manera:

### Components:
Contiene aquellos componentes que se utilizan alrededor de la aplicacion. En este caso el componente maas representatibo es el de la carta en la que se renderizan las peliculas con la informacion solicitada.

### Interfaces:
Se establece la interface de las peliculas segun los paremetros que necesitamos.

### Material:
Modulo en el que se centraliza todas las importaciones relacionadas con la libreria de angular material.

### Servicios:
Todos los servicios relacionados con la aplicacion. En nuestro caso consta de dos archivos:
#### local-storage.service.ts:
- Servicio encargado del manejo del local storage. Utilizado para el almacenaje de los favoritos. Si bien no es una manera persistente de obtener nos datos esta manera me ha permitido de manera rapida mostrar la interaccion y la gestion de los favoritos.

#### movies.service.ts:
- Servicio encargado de la llamada a la api themoviedb

### Pages:
Son aquellos componentes que representan las paginas de la aplicacion. Para este caso disponemos de las pages de favoritos y de busqueda.


## Mejoras en futuros incrementos:
- Mejora del aspecto general de la aplicacion comenzando por el tamaño de las tarjetas de las peliculas.
- Creacion de una pages de detalle de las peliculas seleccionadas en el que muestre el el titulo, genero, sinopsis y nota media. Se accedera clickando sobre las movie-card de cada uno de los  items.
- Funcionalidad de "search while tiping", de manera que realizemos llamadas a la api mientras el usuario escribe en el input de busqueda. Se añadira un debounce time para evitar excesivas llamadas a la api
