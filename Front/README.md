## Práctica Polymer 2

##### 1) Primer crear un componente CARD.
> https://github.com/NicoCroce/PolymerNinja/commit/59c637f610ee95796219bb97eb3d1056e9cb2c7f



    * Se creó un nuevo componente que contiene las propiedades. 
    * Se agregó un SLOT a el contenedor para cargar el componente que tiene los datos llamado NinjaCard.
    * Se agregó un slot nuevo con nombre para mostrar la funcionalidad.

>https://github.com/NicoCroce/PolymerNinja/commit/9831e0f86d5cb194674ad3b5591d5c23fb9bc422

##### 3) Se agregó el componente **paper-button** con el comando

> bower install --save PolymerElements/paper-button@2

* Luego se importa y se usa en el componente NinjaCard.
> https://github.com/NicoCroce/PolymerNinja/commit/2e8dfaa322f83c919f50af6a3b8dc4aa19fe0a18

##### 4) Agregar el componente iron-ajax
- Se importa el componente y se consulta a la URL de lista de Ninjas

> bower install --save PolymerElements/iron-ajax@2

>https://github.com/NicoCroce/PolymerNinja/commit/84ca58047f96d4a21d8ed42b7da700a6c96e0e05


##### 5) Explicar dom-repeat

* Se agregó el dom-repeat al template para que pueda iterar en cada uno de los elementos.
* Se agregaron propiedades a NinjaCard para que ser reemplazadas por los valores de los atributos.
* Se cambiaron algunos estilos.

> https://github.com/NicoCroce/PolymerNinja/commit/e7958c9886787eb0bd295ad209d942aa1d6a47fa