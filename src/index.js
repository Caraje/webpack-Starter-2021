// Para importar funciones de otros archivos Js usamos Import
// entre llaves llamamos a la funcion que deseamos importar y tras from, la ruta donde se encuentra el archivo JS que contiene esa funcion.
// para que esto funcione, es necesario instalar Webpack


import { saludar } from './js/componentes.js';
import './styles.css';



const nombre = 'Carlos!!';

saludar('Carlos');