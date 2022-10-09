import Swal from "sweetalert2";

export const validacionNombre = (nombre) => {
    if (nombre.trim() && isNaN(nombre)) {
      return true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Nombre invalido',
        text: 'Escribe un nombre verdaedro',
      })
      return false
    }
  };
  export const validacionApellido = (apellido) => {
    if (apellido.trim() && isNaN(apellido)) {
      return true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Apellido invalido',
        text: 'Escribe un apellido verdaedro',
      })
      return false
    }
  };
 export const validacionEmail = (email) => {
    const regEx =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (email.trim() && regEx.test(email)) {
      return true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'email invalido',
        text: 'Debe seguir: usuario@usuario.com',
      })
      return false;
    }
  };
 export const validacionDni = (dni) => {
    const regEx = /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/;
    if (dni.trim() && regEx.test(dni)) {
      return true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Dni invalido',
        text: 'Escribe un numero de 7 u 8 cifras',
      })
      return false
    }
  };