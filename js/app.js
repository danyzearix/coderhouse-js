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

//Array de objetos

const cotizador = [];

//Funcion recopiladora de tipo de tecnologia
function recopiladorUno (){
  let tecnologia = Number(prompt("Seleccione el tipo de tecnologia de su app: (1) Nativa, (2) Hibrida, (3) PWA)"));
    if (tecnologia === 1) {
      recopiladorDos();
      return cotizador.push(tecnologiaUno); 

    }
    if (tecnologia === 2) {
      recopiladorDos();
      return cotizador.push (tecnologiaDos);
    }
    if (tecnologia ===3) {
      recopiladorDiseño();
      return cotizador.push (tecnologiaTres);
    } else{
      alert("Ingresa una selección válida");
      recopiladorUno ();
    }
}

//Funcion recopiladora de tipo de sistema operativo
function recopiladorDos (){
  let sistemaOp = Number(prompt("Seleccione el tipo de tecnologia de su app: (1) Android, (2) iOS, (3)Android & iOS:"));
    if (sistemaOp === 1) {
      recopiladorDiseño ()
      return cotizador.push(sistemaOperativoUno);
    }
    if (sistemaOp === 2) {
      recopiladorDiseño ()
      return cotizador.push (sistemaOperativoDos);
    } 
    if (sistemaOp === 3) {
      recopiladorDiseño ()
      return cotizador.push (sistemaHibrido);
    } else{
      alert("Ingresa una selección válida");
      recopiladorDos ();
    }
}

//Funcion recopiladora de diseño
function recopiladorDiseño (){
  let diseno = Number(prompt("Selecione el tipo de diseño para su app: (1) Plantilla, (2) Propio, (3) Avanzado a medida:"));
  
  if (diseno === 1) {
    recopiladorLogin ();
    return cotizador.push(plantilla);
  }
  if (diseno === 2) {
    recopiladorLogin ();
    return cotizador.push (propio);
  }
  if (diseno ===3) {
    recopiladorLogin ();
    return cotizador.push (avanzado);
  } else{
    alert("Ingresa una selección válida");
    recopiladorDiseño ();
  }
}

//Funcion recopiladora de login
function recopiladorLogin (){
  let login = Number(prompt("Selecione el tipo de login para su app: (1) Sin login, (2) Login por correo, (3) Login con correo y redes sociales:"));
  
  if (login === 1) {
    recopiladorCategoria ()
    return cotizador.push(nologin);
  }
  if (login === 2) {
    recopiladorCategoria ()
    return cotizador.push (loginCorreo);
  }
  if (login ===3) {
    recopiladorCategoria ()
    return cotizador.push (loginRedes);
  } else{
    alert("Ingresa una selección válida");
    recopiladorLogin ();  
  }
}

//Funcion recopiladora categoria de app
function recopiladorCategoria (){
  let categoria = Number(prompt("Selecione el tipo de categoria de la app: (1) Informativa, (2) Empresarial, (3) Servicios, (4) Videojuego:"));
  
  if (categoria === 1) {
    recopiladorMapa ();
    return cotizador.push(tipoInformativa);
  }
  if (categoria === 2) {
    recopiladorMapa ();
    return cotizador.push (tipoEmpresa);
  }
  if (categoria ===3) {
    recopiladorMapa ();
    return cotizador.push (tipoServicios);
  } 
  if (categoria === 4) {
    recopiladorMapa ();
    return cotizador.push(tipoJuego);
  }
  else{
    alert("Ingresa una selección válida");
    recopiladorCategoria ()
  }
}

//Funcion recopiladora de mapa
function recopiladorMapa (){
  let mapa = Number(prompt("Seleccione el tipo de caracteristica mapa que desea en su app:  (1) Mapa gratuito, (2) Google Maps, (3) Sin mapa:"));
  
  if (mapa === 1) {
    recopiladorEnlace ();
    return cotizador.push(mapaLibre);
  }
  if (mapa === 2) {
    recopiladorEnlace ();
    return cotizador.push (mapaGoogle);
  }
  if (mapa ===3) {
    recopiladorEnlace ();
    return cotizador.push (mapaNone);
  } else{
    alert("Ingresa una selección válida");
    recopiladorMapa ();
  }
}

//Funcion recopiladora de enlace web
function recopiladorEnlace (){
  let enlace = Number(prompt("Desea conectar su app con una página web?:  (1) Si, (2) No:"));
  
  if (enlace === 1) {
    recopiladorPanel ();
    return cotizador.push(enlaceWeb);
  }
  if (enlace === 2) {
    recopiladorPanel ();
    return cotizador.push (enlaceWebNo);
  } else{
    alert("Ingresa una selección válida");
    recopiladorEnlace ();
  }
}

//Funcion recopiladora de panel
function recopiladorPanel (){
  let panel = Number(prompt("Seleccione el tipo de panel administrador de su app:  (1) Panel en misma app, (2) Panel en otra app, (3) Sin panel:"));
  
  if (panel === 1) {
    recopiladorIdioma ();
    return cotizador.push(panelAdminInto);
  }
  if (panel === 2) {
    recopiladorIdioma ();
    return cotizador.push (panelAdminOther);
  }
  if (panel ===3) {
    recopiladorIdioma ();
    return cotizador.push (sinPanel);
  } else{
    alert("Ingresa una selección válida");
    recopiladorPanel ();
  }
}

//Funcion recopiladora de idioma
function recopiladorIdioma (){
  let panel = Number(prompt("Seleccione la cantidad de idiomas que tendrá su app:  (1) Dos, (2) Tres, (3) Cuatro:"));
  
  if (panel === 1) {
    
    return cotizador.push(unIdioma);
  }
  if (panel === 2) {
    
    return cotizador.push (dosIdiomas);
  }
  if (panel ===3) {
    
    return cotizador.push (tresIdiomas);
  } 
  if (panel ===3) {
    
      return cotizador.push (cuatroIdiomas);
  }

  else{
    alert("Ingresa una selección válida");
    recopiladorIdioma ();
  }
}

//Crear boton iniciador del cotizador

let botonIniciador = document.querySelector("#botonInicial");
botonIniciador.addEventListener("click", () => {
  //Llamar el primer recopilador
  recopiladorUno();

  //Crear el boton con el resultado en el HTML
  let = botonResultado = document.createElement ("button");
  botonResultado.type = "button";
  botonResultado.textContent = "Ver resultado";
  botonResultado.className = "boton";

  let insertarBoton = document.querySelector("main");
  insertarBoton.appendChild (botonResultado);
  //Crear evento de escucha clic
  botonResultado.addEventListener("click", () => {
  
  //Sumar la recopilación del array y devolver el total con el metodo reduce
    let total = cotizador.reduce((acc, el) => acc + el.precio, 0);
  //Crear un elemento HTML image 
    let imagen = document.createElement("img");
    imagen.src = "img/app.gif";
    imagen.height = "200";
    imagen.width = "200";
    
    let pintarImagen = document.querySelector("#boxImg");
    pintarImagen.append(imagen);
    
    // Crear el HTML con el resultado de la cotización
    let prueba = document.createElement ("h1");
    prueba.textContent = `El valor de tu app es de $ ${total} dólares`
    
    let resultadoImpreso = document.querySelector("#boxResult");
    resultadoImpreso.appendChild(prueba);
  
    //Remover el html que ya no se necesita
    botonResultado.remove();
    botonInicial.remove()
    formulario.remove()
  }
  );

})