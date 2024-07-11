import { enviar, documentos, listar, eliminar, modificar } from "../modelo.js";

const $fragm = document.createDocumentFragment();
const $table = document.querySelector("#table")
const $section = document.querySelector(".hidden")
const $form = document.querySelector("#form");
const $boton = document.querySelector("#boton");
const $nit = document.querySelector("#nit");
const $nombre = document.querySelector("#name");
const $apellido = document.querySelector("#apellido");
const $doc = document.querySelector("#doc"); 
const $mail = document.querySelector("#mail"); 
const $dicc = document.querySelector("#dicc");
const $tipo = document.querySelector("#tipo");
const $inputs = document.querySelectorAll(".input");



const modi = () =>{
    event.preventDefault();
    
    let dni = $nit.value
    let nombre = $nombre.value
    let apellido = $apellido.value;
    let tipe = $tipo.value;
    let documento = $doc.value;
    let email = $mail.value;
    let direccion = $dicc.value;
    let id;

    // console.log(nombre);

    if(tipe != "pre"){
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
        documentos(id)
          .then((response)=>{
            let res = response[0];
            let x = res.name;
            let database = {
                nombre: nombre,
                apellido: apellido,
                tipo_documento: x,
                documento: documento,
                correo: email,
                direccion: direccion,
            }
            modificar(database, dni);
            location.reload();
          })
    }
    else{
        alert("Error: Selecciona un TIPO DE DOCUMENTO")
    }


}

$form.addEventListener("submit", modi)

const list = () => {
    listar()
    .then((res)=>{
        res.map((x)=>{
            // console.log(x)
            const $tr = document.createElement("tr");
            const $id = document.createElement("td");
            const $name = document.createElement("td");
            const $apell = document.createElement("td");
            const $tipo = document.createElement("td");
            const $docc = document.createElement("td");
            const $email = document.createElement("td");
            const $direcc = document.createElement("td");
            const $drop = document.createElement("button");
            const $modi = document.createElement("button");
            $drop.classList.add("boton");
            $drop.classList.add("delete");
            $modi.classList.add("boton");
            $modi.classList.add("modi");
            $drop.textContent = "ELIMINAR";
            $modi.textContent = "MODIFICAR";
            $id.textContent = x.id;
            $name.textContent = x.nombre;
            $apell.textContent = x.apellido;
            $tipo.textContent = x.tipo_documento;
            $docc.textContent = x.documento;
            $email.textContent = x.correo;
            $direcc.textContent = x.direccion;  
            $tr.appendChild($id);
            $tr.appendChild($name);
            $tr.appendChild($apell);
            $tr.appendChild($tipo);
            $tr.appendChild($docc);
            $tr.appendChild($email);
            $tr.appendChild($direcc);
            $tr.appendChild($drop);
            $tr.appendChild($modi);
            $fragm.appendChild($tr);
            $table.appendChild($fragm);

            let id = x.id;

            const datosModi ={
                id: id,
                nombre: x.nombre,
                apellido: x.apellido,
                tipo: x.tipo_documento,
                documento: x.documento,
                correo: x.correo,
                dicc: x.direccion
            }
            $nit.value = datosModi.id;
            $nombre.value = datosModi.nombre;
            $apellido.value = datosModi.apellido;
            $doc.value = datosModi.documento;
            $mail.value = datosModi.correo;
            $dicc.value = datosModi.dicc;

            $drop.addEventListener("click", ()=>{
                eliminar(id)
                location.reload();
            })

            $modi.addEventListener("click", ()=>{
                $section.classList.toggle("hidden")
                modi();
            })
                

            })
        })
}
list();
