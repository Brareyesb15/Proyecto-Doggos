const axios = require('axios');

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



module.exports = getTemps;