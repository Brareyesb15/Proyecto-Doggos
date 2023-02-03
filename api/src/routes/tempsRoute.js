const {Router} = require("express");
const  getTemps = require('../controllers/tempsControl.js')

const tempRouter = Router();

tempRouter.get("/", async (req,res) => {
  const result = await getTemps()
  console.log(result)
   try {
    res.status(200).send(result)
} 
catch(error) {
    res.status(400).json(error)
}

})

tempRouter.get("/prueba", (req,res) =>{
    res.status(200).send("estamos dentro")
})


module.exports = tempRouter;