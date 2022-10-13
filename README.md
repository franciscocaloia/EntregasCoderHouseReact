# Kloi**Arduino**

El proyecto simula un ecommerce en donde se muestran algunas de las placas que ofrece arduino y una serie de sensores para complementarlas. Se implementó autenticación utilizando Firebase auth y el guardado de los datos se realiza mediante Cloud Firestore. El cart es persistente gracias a que se almacena en el localStorage por lo que no se pierde al recargar la página.

### User  Story

La barra de navegación es visible durante toda la experiencia de usuario. Esta contiene el logo de la página que actua como enlace a la pagina principal y el menú de navegación. El menú consta de 4 secciones de las cuales la primera consiste en el enlace a la lista completa de productos y cuenta con un submenú desplegable que permite navegar a las listas filtradas por categorías. En la segunda seccion se encuentra el icono del carro de compras que permite navegar a la pagina de checkout y tambien permite visualizar la cantidad de items presentes en el carro. La siguiente sección permite al usuario el inicio de sesión si es que no la ha iniciado, de haber iniciado sesión, la seccion permite acceder al perfil y a la función de "cerrar sesión" mediante un menú desplegable.  Finalmente se encuentra la sección de "buscar orden"  la cual permite al usuario navegar a la página de busqueda de ordenes. 

La página principal permite acceder al detalle de cada producto, donde se muestra la descripción del producto y se da al usuario la opcion de agregar el mismo al carro. Una vez añadido el producto al carro, el usuario tiene la opción de proceder a finalizar la compra o volver al catálogo de productos. Al volver al catálogo se le informa al usuario los productos que ya se encuentran en el carro mediante un icono indicador. 
