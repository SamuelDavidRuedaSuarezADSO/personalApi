export const enviar = async (datos) => {
   fetch(`http://127.0.0.1:3000/users`, {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
      'Content-type': 'apllication/json; charset=UTF-8'
    }
  })
  .then((response) => {
      alert("Los datos fueron agregados correctamente");
  })
    .catch((error) => {
    alert("ERROR: ", error)
  })
}

export const documentos = async (id) => {
  const info = await fetch(`http://127.0.0.1:3000/documento?id=${id}`)
  const docu = await info.json();
  return docu;
}

export const listar = async ()=>{
  const elementos = await fetch(`http://127.0.0.1:3000/users`)
  const elemento = await elementos.json();
  return elemento;
}

export const eliminar = async (id)=>{
  fetch(`http://127.0.0.1:3000/users/${id}`, {
    method: 'DELETE',
  });
}

export const modificar = async (data, id) =>{
  fetch(`http://127.0.0.1:3000/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}