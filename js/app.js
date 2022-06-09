//Llamar los datos de un JSON simulando una API 
setTimeout( function trm() {
  fetch("js/dolarapi.json")

      .then ( respuesta => {
          return respuesta.json()
      })
      .then (resultado => {
          mostrarResultado(resultado)
      })
},2000)

//Clase constructora de objetos 
class ObjetoCotizador{
  constructor(label, precio,){
    this.label = label
    this.precio =  precio
  }
};

//Array vacio que recibirá la selección del usuario
let arrayVacio = [];

//Renderizar los datos solicitados del archivo JSON
function mostrarResultado({dolar}) {
  let dolarHoy = document.querySelector("#dolarHoy")

  dolarHoy.innerHTML = `<a style="color: #0D6EFD;">  TRM = $${dolar} COP </a>`
};

//Validar localStorage con nombre de usuario
let sesionactiva = localStorage.getItem("User")

let botonNombre = document.getElementById("enviarNombre")
let capturarNombre = document.getElementById("userName")

//Condicional para cargar pantalla de bienvenida o para solicitar nombre
if (sesionactiva === null) {

  let datosUser = document.createElement("div");
    datosUser.innerHTML = `<div class="d-flex flex-column text-center justify-content-center py-2" id="formulario">
    <h2>Ingresa tu nombre para iniciar </h2>
    <input class="mx-auto" id="userName" type="text">
      <div class="container text-center">
      <button type="button" class="buttonInit btn btn-primary mt-5 mb-5" id="enviarNombre">Confirmar</button>
      </div>
  </div>`
  
  botonNombre.addEventListener("click", () => {
    if (capturarNombre.value === "" ) {
      Swal.fire(`Debes ingresar un nombre`);
    
    } else{
      localStorage.setItem("User",capturarNombre.value)
      let NombreUsuario = capturarNombre.value 
      let capitalizar = NombreUsuario[0].toUpperCase() + NombreUsuario.substring(1);
      console.log(capitalizar)
      //Alert que confirma el nombre, borra la página de incio y renderiza una nueva sección
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: `${capitalizar} vamos a cotizar tu App`,
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Cotizar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          mainContainer.remove()
          seccionUno();
      }})
  }})
//Condicional que pregunta al usuario que tiene la sesion activa si desea cotizar de nuevo o ver su cotización anterior.
} else{
  formulario.remove();
  let  renderNuevo = document.querySelector("#seccionNombre")
  renderNuevo.innerHTML = `<p>Prueba<p/>`
  }

  let section1 = document.createElement("div");
  
  //Variables primer pantalla de selección
  let tecnologiaUno = new ObjetoCotizador ("Nativa", 3000, "alta");
  let tecnologiaDos = new ObjetoCotizador ("Hibrida", 2500, "media");
  let tecnologiaTres = new ObjetoCotizador ("PWA", 1500, "baja")
  //Primer pantalla de selección
  function seccionUno() {
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
      //saltar seccion de sistema operativo sectionTwo();
  }
  )
  }

//Variables segunda pantalla de selección
let sistemaOperativoUno = new ObjetoCotizador ("Android", 1500, "media");
let sistemaOperativoDos = new ObjetoCotizador ("iOS", 2500, "alta");

  function sectionTwo() {
    let section2 = document.createElement("div");

//Segunda pantalla de selección
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
    sectionThree();
}
)
let selecion5 = document.querySelector("#ios");
selecion5.addEventListener("click", () => {
    arrayVacio.push(sistemaOperativoDos)
    section2.remove();
    console.log(arrayVacio);
    sectionThree();
}
)
}//cierre de funcion two

//Variables tercera pantalla de selección
let plantilla = new ObjetoCotizador ("Plantilla", 500, "bajo");
let propio = new ObjetoCotizador ("Propio", 1000, "medio");
let avanzado = new ObjetoCotizador ("Avanzado a medida", 2700, "alto");

function sectionThree() {
  let section3 = document.createElement("div");

//Segunda pantalla de selección
  section3.innerHTML = `<div class="container py-5 id="prueba"></div>
  <div class="row justify-content-around text-center">
    <div class="col-4 selectionCard">
      <img src="src/desing-plan.png" id="plantilla" alt="">
      <h1>Plantilla</h1>
    </div>
    <div class="col-4 selectionCard" >
      <img src="src/desing-prop.png" id="propio" alt="">
        <h1>Propio</h1>
    </div>
    <div class="col-4 selectionCard" >
      <img src="src/desing-avz.png" id="avanzado" alt="">
        <h1>Avanzado</h1>
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
document.body.appendChild(section3);

let selecion6 = document.querySelector("#plantilla");
selecion6.addEventListener("click", () => {
  arrayVacio.push(plantilla)
  section3.remove();
  console.log(arrayVacio);
  sectionFour();
}
)
let selecion7 = document.querySelector("#propio");
selecion7.addEventListener("click", () => {
  arrayVacio.push(propio)
  section3.remove();
  console.log(arrayVacio);
  sectionFour();
}
)

let selecion8 = document.querySelector("#avanzado");
selecion8.addEventListener("click", () => {
  arrayVacio.push(avanzado)
  section3.remove();
  console.log(arrayVacio);
  sectionFour();
}
)
}//cierre de funcion three

//Variables cuarta pantalla de selección
let nologin = new ObjetoCotizador ("Sin login", 0, "ninguna");
let loginCorreo = new ObjetoCotizador ("Con correo", 200, "baja");
let loginRedes = new ObjetoCotizador ("Con redes", 700, "Alta");

function sectionFour() {
  let section4 = document.createElement("div");

//Cuarta pantalla de selección
  section4.innerHTML = `<div class="container py-5 id="prueba"></div>
  <div class="row justify-content-around text-center">
    <div class="col-4 selectionCard">
      <img src="src/nologin.svg" id="nologin" alt="">
      <h1>Sin login</h1>
    </div>
    <div class="col-4 selectionCard" >
      <img src="src/logincorreo.svg" id="loginCorreo" alt="">
        <h1>Login con correo</h1>
    </div>
    <div class="col-4 selectionCard" >
      <img src="src/loginredes.svg" id="loginRedes" alt="">
        <h1>Login con redes</h1>
    </div>
  </div>

  <div class="container text-center py-5">
      <button class="buttonInit btn btn-primary" id="infoOne">
        Diccionario
      </button>
  </div>

  <template id="templateOne">
      <swal-html>
          <h5>SIN LOGIN</h5>
          <p>La app no requiere inicio de sesión con credenciales para su funcionamiento normal.</p>
          <h5>LOGIN CORREO</h5>
          <p>La app requiere iniciar sesion con credenciales usando email y clave previamente registrado para su uso.</p>
          <h5>LOGIN REDES</h5>
          <p>La validación de credenciales se puede conectar con una cuenta de red social como Facebook o Twitter.</p>
      </swal-html>
  </template>
`
document.body.appendChild(section4);
let selecion9 = document.querySelector("#nologin");

selecion9.addEventListener("click", () => {
  arrayVacio.push(nologin)
  section4.remove();
  console.log(arrayVacio);
  finalizar();
}
)
let selecion10 = document.querySelector("#loginCorreo");

selecion10.addEventListener("click", () => {
  arrayVacio.push(loginCorreo)
  section4.remove();
  console.log(arrayVacio);
  finalizar();
}
)

let selecion11 = document.querySelector("#loginRedes");

selecion11.addEventListener("click", () => {
  arrayVacio.push(loginCorreo)
  section4.remove();
  console.log(arrayVacio);
  finalizar();
}
)

}//cierre de funcion four

function finalizar() {
  let final = document.createElement("div")
  final.innerHTML = `<div class="container-fluid d-flex justify-content-center py-5 id="prueba"><button class="btn btn-primary"id="finalizar">Cotizar</button> 
  <button id="refresh">Recargar</button> </div>`
  document.body.appendChild(final);

  let refresh = document.getElementById('refresh');
  refresh.addEventListener('click', _ => {
            location.reload();
})

  final.addEventListener("click", () => {

  let total = arrayVacio.reduce((acc, el) => acc + el.precio, 0);
  Swal.fire(`El precio de la app es $${total}`)
  console.log(total)
  
})
}