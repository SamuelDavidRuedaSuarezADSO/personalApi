// Impotaciones de los modulos con las peticiones y post
import { enviar, documentos } from "./modelo.js";

// creacion de las constantes que contienen el contenido del html

const $root = document.querySelector("#root");
const $form = document.querySelector("#form");
const $boton = document.querySelector("#boton");
const $name = document.querySelector("#name");
const $tipo = document.querySelector("#tipo");
const $doc = document.querySelector("#doc"); 
const $mail = document.querySelector("#mail"); 
const $dicc = document.querySelector("#dicc");
const $inputs = document.querySelectorAll(".input");

// Cree esta variable para validar la id de lo seleccionado en el tipo de documento
let id;

// Creacion de una función expresada que recive el evento para manipular el boton para que no refesque la pagina al precionarlo

const validar = (event) => {
  // Metodo para evitar que el boton refresque la pagina
  event.preventDefault();
  // creancion de variables que guardan la informacion ingresada en la pagina
  let name =  $name.value.trim()
  let tipe =  $tipo.value.trim()
  let doc =  $doc.value.trim()
  let mail =  $mail.value.trim()
  let dicc = $dicc.value.trim()
  
  // Validacion para que no permita añadir un nuevo usuario si por lo menos hay un campo vacio
  if ($name === "" || tipe === "pre" || doc === "" || mail === "" || dicc === "" ) {
    alert("Error: Ingresa todos los campos");
  }
  else {
    // Validacion de que no ingresen numeros al campo nombre
    if (isNaN(name)) {
      // Validacion de que el selector de tipo de documento no este en su valor predeterminado 
      if (tipe != "pre") {
        // Seleccion de id dependiendo el caso seleccionado en el selector
        switch (tipe) {
          case "ti":
            id = 1;
            break;
          case "cc":
            id = 2;
            break;
          case "ce":
            id = 3;
            break;
          case "ps":
            id = 4;
            break;
          case "lm":
            id = 5;
            break;
        }
        // llamada al fech con el link en donde se encuentra los id y nombre de los tipos de documentos, se pasa el id para que retorne el valor que coincida
        documentos(id)
          .then((reponse) => {
            // si la repuesta es positiva, recorremos (let res = response[0]) la respues y selecionamos (let tipo = res.tipo) el nombre del tipo del documento
            let res = reponse[0];
            let tipo = res.tipo;
            // Validacion para que solo se permitan numero en el campo documento
            if (!isNaN(doc)) {
              // Validacion mediante un rege  para que solo se permitan ingresar emails en el campo email
              if (/^[\w-\.]+\@([\w-]+\.)+[\w-]{2,4}$/.test(mail)) {
                // Validacion para evitar que se coloquen solo numeros en la direccion
                if (isNaN($dicc)) {
                  //Si todas las valiciones son positivas, creamos un objeto llamado datos para que guarde estos datos en el orden que tenemos en la api usuarios,
                  const datos = {
                    nombre: name,
                    tipo_documento: tipo,
                    documneto: doc,
                    correo: mail,
                    direccion: dicc
                  }
                  // Recorre todos los inputs en el html y de los vacia
                  for (let i = 0; i < $inputs.length; i++) {
                    $inputs[i].value = "";
                  }
                  // Seleccion el preterminado en el tipo de dato para "reiniciarlo"
                  $tipo.value = "pre";

                  // Envia una alerta para informar que todos los datos fueron enviados correctamente
                  alert("Los datos fueron ingresados correctamente");
                  
                  // llama al modulo encargado de enviar atravez del metodo posh los datos guardados en el objeto datos
                  enviar(datos)
                }
                else {
                  // Si la validacion del la direccion es incorrecto emite esta alerta
                  alert("Error: La DIRECCION no es valida")
                }
              }
              else {
                // Si la validacion del email es incorrecto emite esta alerta
                alert("Error: El EMAIL no es valido")
              }
            }
            else {
              // Si la validacion del documento es incorrecto emite esta alerta
              alert("Error: El DOCUMENTO no es valido")
            }
          })
        }
        else{
          // Si la validacion del selector es incorrecto osea que se mantuvo el predeterminado emite esta alerta
          alert("Error: Selecciona un TIPO DE DOCUMENTO")
        }
      }
      else {
      // Si la validacion del nombre es incorrecto emite esta alerta
      alert("Error: El NOMBRE no es valido")
    }
  }
  
}
// Aplicamos un nuevo evento al formulario
$form.addEventListener("submit", validar);
