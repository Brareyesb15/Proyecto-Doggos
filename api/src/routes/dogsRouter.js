const {Router} = require("express");
const getAllDogs  = require("../controllers/dogsControl");

const dogRouter = Router();

dogRouter.get("/", async (req,res) => {
    const resp = await getAllDogs() 

    try {
        res.status(200).json(resp)
    } 
    catch(error) {
        res.status(400).send(error.message)
    }

}) // COMENZAR RUTEO. FUNCIONES EN CONTROLLERS,  RUTAS SOLO PARA RECIBIR PARAMETROS, PASARLOS A LAS FUNCIONES Y RESPONDER. HACER ESTO VIENDO EL REPASO DE JORGE VEGA.

module.exports = dogRouter;  