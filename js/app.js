let botonNombre = document.getElementById("enviarNombre")
let capturarNombre = document.getElementById("userName")

botonNombre.addEventListener("click", () => {
    sessionStorage.setItem("User",capturarNombre.value)
    Swal.fire(`${capturarNombre?.value} ya puedes iniciar a cotizar, busca el boton iniciar cotización`)
})


const nombreDeUsuario = capturarNombre.value

console.log(nombreDeUsuario)





//Clase constructora
class ObjetoCotizador{
    constructor(label, precio,){
      this.label = label
      this.precio =  precio
    }
  };
  
  //Crear objetos 
  //Tipo de tecnologia
  let tecnologiaUno = new ObjetoCotizador ("Nativa", 3000, "alta");
  let tecnologiaDos = new ObjetoCotizador ("Hibrida", 2500, "media");
  let tecnologiaTres = new ObjetoCotizador ("PWA", 1500, "baja")
  
  //Sistemas operativos nativos
  let sistemaOperativoUno = new ObjetoCotizador ("Android", 1500, "media");
  let sistemaOperativoDos = new ObjetoCotizador ("iOS", 2500, "alta");
  
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
  
  //Tipo de app
  let tipoInformativa = new ObjetoCotizador ("Informativa", 200, "baja");
  let tipoEmpresa = new ObjetoCotizador ("Empresa", 500, "media");
  let tipoServicios = new ObjetoCotizador ("Servicios", 700, "media");
  let tipoJuego = new ObjetoCotizador ("Juego", 1500, "alta");
  
  //Carácteristicas mapa
  let mapaLibre = new ObjetoCotizador ("Mapa open source", 500, "baja");
  let mapaGoogle = new ObjetoCotizador ("Mapa Google", 2000, "alta");
  let mapaNone = new ObjetoCotizador ("Sin mapa", 0, "baja");
  
  //Caracteristicas enlace web
  let enlaceWeb = new ObjetoCotizador ("Conectar con página web", 1000, "alta");
  let enlaceWebNo = new ObjetoCotizador ("Sin enlace ", 0, "baja");
  
  //Panel de admistrador 
  let panelAdminInto = new ObjetoCotizador ("Panel en app", 2000, "baja");
  let panelAdminOther = new ObjetoCotizador ("Panel en app diferente", 5000, "alta");
  let sinPanel = new ObjetoCotizador ("Sin panel", 0, "baja");
  
  //Idioma
  let unIdioma = new ObjetoCotizador ("Un idioma", 500, "alta"); 
  let dosIdiomas = new ObjetoCotizador ("Dos idiomas", 1000, "baja");
  let tresIdiomas = new ObjetoCotizador ("Tres idiomas", 2000, "media");
  let cuatroIdiomas = new ObjetoCotizador ("Cuatro idiomas", 3000, "alta");

//Array vacio que recibirá la selección del usuario con método push 

let arrayVacio = [];

//Boton que inicia el algoritmo
document.querySelector("#iniciar");
iniciar.addEventListener("click", () => {
    let section1 = document.createElement("div");

//Primer pantalla de selección
    section1.innerHTML = `<div class="container py-5"></div>
    <div class="row justify-content-around text-center">
      <div class="col-4 selectionCard">
        <img src="src/nativa.svg" id="nativa" alt="">
        <h1>Nativa</h1>
      </div>
      <div class="col-4 selectionCard" >
        <img src="src/hibrida.svg" id="hibrida" alt="">
          <h1>Hibrida</h1>
      </div>
      <div class="col-4 selectionCard" >
        <img src="src/webapp.svg" id="webapp" alt="">
          <h1>WebApp</h1>
      </div>
    </div>

    <div class="container text-center py-5">
        <button class="buttonInit btn btn-primary" id="infoOne">
          Diccionario
        </button>
    </div>

    <template id="templateOne">
        <swal-html>
            <h5>NATIVA</h5>
            <p>Es cuando se usa el lenguaje de programación propio del sistema operativo por ejemplo: Android permite Kotlin y Java mientras que iOS permite Swift.</p>
            <h5>HIBRIDA</h5>
            <p>Se usa una libreria como react native basada en tecnologia web que comparten los sistemas operativos para usar un solo codigo fuente y que la app funcione en ambos S.O</p>
            <h5>WEBAPP</h5>
            <p>Se usan librerias como React, Vue o Angular para crear una aplicación web que corra desde el navegador con funciones similares a una app instalable</p>
        </swal-html>
    </template>
`

document.body.appendChild(section1);
//Remover HTML para dar paso a la siguiente sección 
iniciar.remove();
mainContainer.remove();

document.querySelector("#infoOne");
infoOne.addEventListener("click", () => {
    
    Swal.fire({
        template: "#templateOne"
    });

    })

let selecion = document.querySelector("#nativa");

selecion.addEventListener("click", () => {
    arrayVacio.push(tecnologiaUno)
    section1.remove();
    console.log(arrayVacio);
    sectionTwo();
}
)


let selecion2 = document.querySelector("#hibrida");

selecion2.addEventListener("click", () => {
    arrayVacio.push(tecnologiaDos)
    section1.remove();
    console.log(arrayVacio);
    sectionTwo();
}
)

let selecion3 = document.querySelector("#webapp");

selecion3.addEventListener("click", () => {
    arrayVacio.push(tecnologiaTres)
    section1.remove();
    console.log(arrayVacio);
    sectionTwo();
}
)

function sectionTwo() {
    let section2 = document.createElement("div");

//Primer pantalla de selección
    section2.innerHTML = `<div class="container py-5 id="prueba"></div>
    <div class="row justify-content-around text-center">
      <div class="col-4 selectionCard">
        <img src="src/android.svg" id="android" alt="">
        <h1>Android</h1>
      </div>
      <div class="col-4 selectionCard" >
        <img src="src/ios.svg" id="ios" alt="">
          <h1>iOS</h1>
      </div>
    </div>

    <div class="container text-center py-5">
        <button class="buttonInit btn btn-primary" id="infoOne">
          Diccionario
        </button>
    </div>

    <template id="templateOne">
        <swal-html>
            <h5>NATIVA</h5>
            <p>Es cuando se usa el lenguaje de programación propio del sistema operativo por ejemplo: Android permite Kotlin y Java mientras que iOS permite Swift.</p>
            <h5>HIBRIDA</h5>
            <p>Se usa una libreria como react native basada en tecnologia web que comparten los sistemas operativos para usar un solo codigo fuente y que la app funcione en ambos S.O</p>
            <h5>WEBAPP</h5>
            <p>Se usan librerias como React, Vue o Angular para crear una aplicación web que corra desde el navegador con funciones similares a una app instalable</p>
        </swal-html>
    </template>
`

document.body.appendChild(section2);



let selecion4 = document.querySelector("#android");

selecion4.addEventListener("click", () => {
    arrayVacio.push(sistemaOperativoUno)
    section2.remove();
    console.log(arrayVacio);
    finalizar();
}
)

let selecion5 = document.querySelector("#ios");

selecion5.addEventListener("click", () => {
    arrayVacio.push(sistemaOperativoDos)
    section2.remove();
    console.log(arrayVacio);
    finalizar();
}
)


}//cierre de funcion two


function finalizar() {
    let final = document.createElement("div")
    final.innerHTML = `<div class="container-fluid d-flex justify-content-center py-5 id="prueba"><button class="btn btn-primary"id="finalizar">Cotizar</button> </div>`
    document.body.appendChild(final);

    final.addEventListener("click", () => {
  
    let total = arrayVacio.reduce((acc, el) => acc + el.precio, 0);
    let userNameStorage = sessionStorage.getItem("User")
    Swal.fire(`${userNameStorage} El precio de la app es $${total}`)
    console.log(total)
})
}


}) //Cierre de funcion inciar addEvent


//Funciones de creación HTML







