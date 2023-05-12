const validate = (userData) => {
    let errors = {};
  
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)){
        errors.username = "El email es inexistente"
    }
    if(!userData.username){
        errors.username = "Necesitas introducir un correo electronico"
    }
    if(userData.username.length > 35){
        errors.username = "El email no puede superar los 35 caracteres"
    }
    if(!userData.password.match(/\d/)){
        errors.password = "La contraseña debe tener por lo menos un número"
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "La contraseña debe contener entre 6 y 10 caracteres"
    }
    if (!userData.password) {
        errors.password = "Necesitas introducir una contraseña";
    }
    return errors
  };

export default validate