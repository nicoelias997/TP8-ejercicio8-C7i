export const validacionNombre = (nombre) => {
    if (nombre.trim() && isNaN(nombre)) {
      return true;
    } else {
      return false
    }
  };
  export const validacionApellido = (apellido) => {
    if (apellido.trim() && isNaN(apellido)) {
      return true;
    } else {
      return false
    }
  };
 export const validacionEmail = (email) => {
    const regEx =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (email.trim() && regEx.test(email)) {
      return true;
    } else {
      return false;
    }
  };
 export const validacionDni = (dni) => {
    const regEx = /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/;
    if (dni.trim() && regEx.test(dni)) {
      return true;
    } else {
      return false
    }
  };