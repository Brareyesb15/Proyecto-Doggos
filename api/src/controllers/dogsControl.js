const axios = require('axios');

const getAllDogs = async() => { // funcion para obtener todos los perros de la API. imagen, nombre, temperamento, peso. 

   let allDogs = await axios.get(`https://api.thedogapi.com/v1/breeds`); //traigo el array de todos los perros y los guardo
   let datosDog = allDogs.data.map(obj => { // Mapeo la data traida del llamado a la api, la función del map creará un objeto nuevo por cada dog 
      let indDog = {};                      //de la data, sacaremos los values necesarios y devolverá ese objeto que con el map queda dentro del array.
      indDog.name = obj.name;            // dejo al perro acá sin temperamentos porque renderizaré para cada perro sus temperamentos desde la base de datos. 
      indDog.image= obj.image.url;
      indDog.weight = `${obj.weight.metric} kilos`;
    
                        
      return indDog  
      })
   
   return datosDog; // retorno el array.

}

module.exports = getAllDogs;