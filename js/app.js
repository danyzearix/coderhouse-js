//Clase constructora

class ObjetoCotizador{
  constructor(label, precio, complejidad){
    this.label = label
    this.precio =  precio
    this.complejidad = complejidad
  }
};

//Crear objetos 

//Tipo de tecnologia
let tecnologiaUno = new ObjetoCotizador ("Nativa", 2500, "alta");
let tecnologiaDos = new ObjetoCotizador ("Hibrida", 3000, "media");
let tecnologiaTres = new ObjetoCotizador ("PWA", 1500, "baja")

//Sistemas operativos nativos
let sistemaOperativoUno = new ObjetoCotizador ("Android", 1500, "media");
let sistemaOperativoDos = new ObjetoCotizador ("iOS", 2500, "alta");
let sistemaOperativoTres = new ObjetoCotizador ("WebApp", 1000, "baja");

//Sistema hibrido
let sistemaHibrido = new ObjetoCotizador ("Android y iOS", 5000, "alta");

//Diseño
let plantilla = new ObjetoCotizador ("Plantilla", 500, "bajo");
let propio = new ObjetoCotizador ("Propio", 1000, "medio");
let avanzado = new ObjetoCotizador ("Avanzado a medida", 2700, "alto");

//Carácteristica login
let nologin = new ObjetoCotizador ("Sin login", 0, "ninguna");
let loginCorreo = new ObjetoCotizador ("Con correo", 200, "baja");
let loginRedes = new ObjetoCotizador ("Con redes", 700, "Alta");

//Array de objetos

const cotizador = [];

//Funcion recopiladora de tipo de tecnologia
function recopiladorUno (){
  let tecnologia = Number(prompt("Seleccione el tipo de tecnologia de su app: (1) Nativa, (2) Hibrida, (3) PWA)"));
    if (tecnologia === 1) {
      return cotizador.push(tecnologiaUno);
    }
    if (tecnologia === 2) {
      return cotizador.push (tecnologiaDos);
    }
    if (tecnologia ===3) {
      return cotizador.push (tecnologiaTres);
    } else{
      alert("Ingresa una selección válida")
    }
}

//Funcion recopiladora de tipo de sistema operativo
function recopiladorDos (){
  let sistemaOp = Number(prompt("Seleccione el tipo de tecnologia de su app: (1) Android, (2) iOS, (3)Web App)"));
    if (sistemaOp === 1) {
      return cotizador.push(sistemaOperativoUno);
    }
    if (sistemaOp === 2) {
      return cotizador.push (sistemaOperativoDos);
    }
    if (sistemaOp ===3) {
      return cotizador.push (sistemaOperativoUno);
    } else{
      alert("Ingresa una selección válida")
    }
}

//Llamado de funciones
recopiladorUno();
recopiladorDos();

//Console log mostrando los objetos que se agregaron al array utilizando el metodo push como retorno de una funcion desde la seleccion de usuario
console.log(cotizador);
//Sumar los valores del precio usando metodo .reduce
const total = cotizador.reduce((acc, el) => acc + el.precio, 0)

//Salida de la app
alert(`El valor de tu app es de $${total}`);