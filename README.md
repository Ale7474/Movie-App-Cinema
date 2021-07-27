# React Movie App - ReactJS

La idea de crear esta aplicación es emular una plataforma de peliculas, listando una serie de películas que se obtiene de la API de TMDB aquí puse en practica varios temas de ReactJS como el routing, la carga condicional de componentes, los functionals components, ,styled components y algo de TypeScripts que aún no manejo al 100%.

[Live Demo](https://movie-show-app-reactjs.netlify.app/)

## Características
Las funciones principales que se pueden encontrar en esta App son las siguientes:
- Un banner principal donde se muestra una película al azar, que se consigue generando un número random y haciendo una petición a la API pasando por parámetro este número generado.
- Un filtro para buscar las películas por nombre, gracias a React la actualización de la lista de películas se hace sin recargar la página.
- Una lista de películas más populares, carga una cantidad predefinida al principio y al llegar al final de la página te da la opción de "cargar más".
- Al darle clic a una tarjeta de película te re direcciona a una página donde te muestra más detalle sobre la película seleccionada. Todo esto gracias a React Router Dom.

## Mejoras
Algunas de las mejoras que tengo pensado aplicar para esta aplicación son la siguiente:
- Al dar clic sobre una película abra una single page o popup con más información detallada sobre la pelicula.
- Consumir otra API tercera para reproducir los traillers de cada película.
- Poder crear una cuenta y sistema de login.
- Que se pueda dar Likes y/o guardar como favoritos
- Poder dar clic a los actores en la información detallada de las películas y ver su información en una nueva página o popup.

## Tecnologías utilizadas
- React versión: `17.0.1`
- Styled Component: `5.2.0`
- React Router DOM: `5.2.0`
- TypeScript: `3.7.5`

## Screenshots

![React Movie App with ReactJS](https://media.giphy.com/media/XmC6iskOCQpNnSUY8Z/giphy.gif)

## Recursos

Este proyecto no lo hice de mi propia imaginación, me ayude de algunos videos y usando algunas documentación:

- Idea original [Weibenfalk - YouTube Channel](https://www.youtube.com/channel/UCnnnWy4UTYN258FfVGeXBbg)
- Como usar [React Router DOM](https://reactrouter.com/web/guides/quick-start)
- Como usar [Styled Components](https://styled-components.com/docs/advanced)

## Contacto

Puedes ponerte en contacto conmigo a través de mi sitio web [cristhianjhl.com](cristhianjhl.com) o mi [correo](cristhianjhl@gmail.com)
