# EmaisPruebaTecnica
## Por: Igor Moreno Alonso

## Objetivos

- Desarrollo de una aplicación web en la que se mostrara:

Listado de películas mostradas con un buscador.
Una sección con las películas favoritas seleccionadas mediante un botón

## Descripción del proyecto

Tecnologías utilizadas:
- HTML, SCSS, TypeScript

Framework utilizado:
- Angular v.14

Librerías  utilizadas:
- RxJs
- Angular material para los componentes

### Justificación:
#### Angular:
- Se ha optado por la utilización de el framework de angular debido a que es el framework con el que más cómodo me encuentro trabajando actualmente.

#### Angular Material:
- He basado la creación de mis componentes en la librería de Angular Material, debido a su facilidad de uso de cara a centrar el tiempo de la realización de la prueba en aspectos mas técnicos.

## Arquitectura:

El proyecto se organizado de la siguiente manera:

### Components:
Contiene aquellos componentes que se utilizan alrededor de la aplicación. En este caso, el componente mas representativo es el de la carta en la que se renderizan las películas con la información solicitada.

### Interfaces:
Se establece la interface de las películas segun los parámetros que necesitamos.

### Material:
Módulo en el que se centralizan todas las importaciones relacionadas con la librería de angular material.

### Servicios:
Todos los servicios relacionados con la aplicación. En nuestro caso, consta de dos archivos:
#### local-storage.service.ts:
- Servicio encargado del manejo del local storage. Utilizado para el almacenaje de los favoritos. Si bien, no es una manera persistente de almacenar los datos, ésta me ha permitido de manera rápida mostrar la interacción y la gestión de los favoritos.

#### movies.service.ts:
- Servicio encargado de la llamada a la api themoviedb.

### Pages:
Son aquellos componentes que representan las paginas de la aplicación. Para este caso disponemos de las pages de favoritos y de búsqueda.


## Mejoras en futuros incrementos:
- Mejora del aspecto general de la aplicación, comenzando por el tamaño de las tarjetas de las películas.
- Creación de una pages de detalle de las películas seleccionadas en el que muestre el título, género, sinopsis y nota media. Se accederá clickando sobre las movie-card de cada uno de los items.
- Funcionalidad de "search while tiping", de manera que realicemos llamadas a la api mientras el usuario escribe en el input de búsqueda. Se añadirá un debounce time para evitar excesivas llamadas a la api.
