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
  const info = await fetch(`http://127.0.0.1:3000/documentos?id=${id}`)
  const docu = await info.json();
  return docu;
}