
//console.log(typeof localStorage.value)
let sesionactiva = localStorage.getItem("User")

let botonNombre = document.getElementById("enviarNombre")
let capturarNombre = document.getElementById("userName")

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
      //swal
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

} else{
  formulario.remove();
  let  renderNuevo = document.querySelector("#seccionNombre")
  renderNuevo.innerHTML = `<p>Prueba<p/>`
  }


//Promesa y fetch que trae la TRM de un JSON genérico.
//SetTimeout de 1.5 segundos simulando la latencia en la respuesta del servidor
setTimeout (function trm() {
  fetch("../data/dolarapi.json")
function trm() {
  fetch("./data/dolarapi.json")

      .then ( respuesta => {
          return respuesta.json()
      })
      .then (resultado => {
          mostrarResultado(resultado)
      })
}}, 2000)

//Función que selecciona el id del espacio reservado para renderizar la tasa del mercado
function mostrarResultado({dolar}) {
  let dolarHoy = document.querySelector("#dolarHoy")

  dolarHoy.innerHTML = `<a style="color: #0D6EFD;">  TRM = $${dolar} COP </a>`
};

//Capturar nombre del cliente y guardarlo en local storage
  
  

  let section1 = document.createElement("div");
  
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
  }