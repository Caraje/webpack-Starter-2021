// Para poder usar una funcion en otro archivo JS, debe ir precedida de Export para poder ser usada
import '../css/componentes.css';

export const saludar = (nombre) => {
    console.log('Creando etiqueta h1 ');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre}`;

    document.body.append(h1);

}