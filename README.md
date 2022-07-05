# Proyecto Ecommerce Effy Clothes ☁️
La idea que pensé para abarcar el proyecto de E-commerce es de indumentaria femenina, pero basándome únicamente en:
- Pijamas 💤
- Tops 👚
- Jeans 👖
- Accesorios 💍

## Dependencias ⚡
Para el desarrollo del E-commerce utilicé diferentes dependencias tanto para el desarrollo como para agregar diferentes estilos y fuentes al proyecto. Las dependencias son: 
- [react-bootstrap](https://react-bootstrap.github.io/) Para utilizar componentes de Bootstrap que fueron recontruidos para React.
- [fortawesome/free-solid-svg-icons](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons) Para utilizar SVG Icons como logo para la página.
- [fortawesome/react-fontawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome) Para utilizar íconos dentro de los componentes generados.
- [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start) Para generar rutas en el proyecto y darle navegabilidad a la web.  
- [bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/) Herramienta para darle diseño y estilos a la aplicación.
- [firebase](https://firebase.google.com/) Para utilizar Cloud Firestore como base de datos.

## Instalación 💻

Requiere de [Node.js](https://nodejs.org/) para correr el proyecto.
Instalar las dependencias e inicializar el server. En el directorio del proyecto ejecutar:

```sh
git clone https://github.com/ayelencalissi/ecommerce.git
cd miapp
npm install
npm start
```
## Variables de entorno 🔧
- Configuración de firebase: [ejemplo de las variables de entorno](https://github.com/ayelencalissi/ecommerce/blob/main/.env.example)

## Rutas y componentes 🚎

[path='/'](https://github.com/ayelencalissi/ecommerce/tree/firebase2/src/components/ItemListContainer) me lleva al inicio de mi pagina.
path='/category/:categoryId' redirige a alguna categoria desde mi navBar, componente [ItemListContainer](https://github.com/ayelencalissi/ecommerce/tree/firebase2/src/components/ItemListContainer) 
path='/item/:productId' redirige a un producto, componente [ItemDetailContainer](https://github.com/ayelencalissi/ecommerce/tree/firebase2/src/components/ItemDetailContainer)
path='/cart redirige al carrito, componente [Cart](https://github.com/ayelencalissi/ecommerce/tree/firebase2/src/components/Cart)
path='/checkout' redirige al último paso y formulario [FormUser](https://github.com/ayelencalissi/ecommerce/tree/firebase2/src/components/FormUser)
path='/*' en caso de ingreso de una URL inexistente utilizo [Navigate](https://reactrouter.com/docs/en/v6/components/navigate) de react-router-dom para redirigir al inicio

## Documentos de firestore 🔋
- Productos -> collection products: 
```sh
	'id', type 'string'            
	'title', type 'string'
	'description', type 'string'
	'category', type 'string'
	'pictureUrl', type 'string'
	'price', type 'number'
	'quantity', type 'number'
	'stock', type 'number'
```
- Categorias -> collection categories: 
```sh
	'description', type 'string'
```
- Ordenes de compra -> collection orders: 
```sh
	'buyer', type [
				'address', type 'string',
				'email', type 'string',
				'info', type 'string',
				'lastname', type 'string',
				'name', type 'string',
				'phone', type 'number'
			]
	'date', type 'timestamp'
	'items' type [
				'id', type 'string'            
				'title', type 'string'
				'description', type 'string'
				'category', type 'string'
				'pictureUrl', type 'string'
				'price', type 'number'
				'quantity', type 'number'
				'stock', type 'number'
```


## Demo 🎬
<p align="center">
  <img src="https://media.giphy.com/media/Pkj3CeK7tcVrl5qeTG/giphy.gif" alt="animated" />
</p>

## Deploy 🌐
Test app en Vercel -> [test me!](https://ecommerceeffy.vercel.app/)