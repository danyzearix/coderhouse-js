/* Desafio complementario #1 

//Contar de 10 en 10 hasta llegar a 100
alert("Vamos a contar hasta 100 de 10 en 10");


for (let i = 0; i <= 100; i += 10) {
  alert(i);
}

// Contar hasta 10 y mostrar un alert

alert("Relajate, vamos a contar hasta 10")

let i = 1;

while (i < 11) {
    alert(`Cuenta ${i}`)

    i++;

    if (i === 11) {
        alert(`Felicidades, ya contaste hasta 10 ¡Estas relajado :)!`);

    }

}

*/

// Desafio entregable #1 

const basica = {
  valor: 25000
};

const empresarial = {
  valor: 35000
};

const ecommerce = {
  valor: 55000
};

const basico = {
  valor: 55000
};

const intermedio = {
  valor: 65000
};

const avanzado = {
  valor: 85000
};

let data1 = () => {

  do {
   let so = prompt("Seleciona el tipo de app: (1) para basica (2) para empresarial (3) para ecommerce"); 

          if (so == 1) {
               alert ("Selecionaste básica")
               {
                   return parseInt (basica.valor)
               }
          }

          if (so == 2) {
              alert ("Selecionaste empresarial")
              {
                  return parseInt (empresarial.valor)
              }
          }

          if (so == 3) {
              alert ("Selecionaste ecommerce")
              {
                  return parseInt (ecommerce.valor)
              }
          }

          if (so != (1) || (2) || (3)) {
              alert("Error, escoge una opcion valida")
          }
   }

   while (data1 = Number) }

let data2 = () => {

      do {
          
      
      let app = prompt("Seleciona el tipo de app: (1) para nativa, (2) para Hibrida, (3) para web")

      if (app == 1 ){
          alert ("Escogiste basico"); {
          return parseInt (basico.valor);
  }
  }

      if (app == 2 ){
      alert ("Escogiste intermedio"); {
      return parseInt (intermedio.valor);
  }                            
  }

  if (app == 3 ){
      alert ("Escogiste avanzado"); {
      return parseInt (avanzado.valor);
  }  
  }       
  
  if (app != (1) || (2) || (3)) {
      alert("Error, escoge una opcion valida")
  }

  } while (data2 = Number);

}


function sumarDatos() {
   let dato1 = data1 ()
   let dato2 = data2 ()

   let sumar = dato1+ dato2;

   console.log(dato1);
   console.log(dato2);
   alert(`El valor de tu app es de: $${sumar} dolares`);
}

sumarDatos();


