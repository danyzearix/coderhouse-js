
/*
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

  */

  unction recopiladorDos (){
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