import fetch from 'node-fetch';
 
 export default function validaLink(listaDeLinks) {
    const arrayStatus = Promise.all(
        listaDeLinks.map((link) => {
            return fetch(link.href).then((response) => {
             return ({ ...link, status: response.status, ok: checarStatus(response.status)})
            })
            
        })
    )
    return arrayStatus;
  }

  function checarStatus(status){
     if (status >= 200 && status < 400){
        return 'ok';
     } else {
        return 'Fail';
     }
  }
