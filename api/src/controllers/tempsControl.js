const axios = require('axios');
const {Temperamento} = require("../db");

const getTemps = async() => {
    let temperamentos = new Set() // Voy a usar un set para guardar los temperamentos y que no se repitan entre ellos, haré esa comprobación desde acá. 
try {
    let allTemps = await axios.get(`https://api.thedogapi.com/v1/breeds`) // Llamo a la APi para traerme cada perro. 
    allTemps.data.forEach(temp => {                                       //itero sobre cada data de cada perro. 
        if (temp.temperament) {                                           // pregunto si el temperamento del perro existe, que me guarde en unique 
            const unique = temp.temperament.split(",");                   // los temperamentos que tiene ese perro separados cada uno como un string.
            unique.forEach(string => temperamentos.add(string.trim()))    // itero sobre cada uno de ellos para agregarlos al Set, que revisara si existen o no
        }                                                                 // si no existen los incluye quitandole los espacios en blanco para que se puedan comparar. 
    })
    const tempsArray = Array.from(temperamentos);

    return tempsArray;
}
catch(error){
    return (error.message);
}
}

const putTemps = async() => {

    let tempsArray = await getTemps();          // esta función va crear los temperamentos de la base de datos de temperamentos. La idea es que se guardaran traducidos porque
    //quería la pagina en español. Primero llamo a la funcion getTemps creada antes que me devuelve el array con todos los temperamentos sin repetirse.

try {
    tempsArray.forEach(async temp => { // itero sobre el array, hago un llamado a la api traductora (si consigo una mejor la cambio), por cada temperamento
        //lo traduce y lo guarda dentro del key nombre de la tabla Temperamento, a la que agregamos el temperamento traducido a través de .create.
        let traducido = await axios.get(`https://api.mymemory.translated.net/get?q=${temp}&langpair=en|es`)
       
        await Temperamento.create({
            nombre : traducido.data.responseData.translatedText
        })
         
      })
         
            return "se han incluido los temperamentos"
}
catch(error) {
    return error.message
}
}



module.exports = {
    getTemps,
    putTemps
}