const {Router} = require("express");
const  {getTemps, putTemps}= require('../controllers/tempsControl.js')

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

tempRouter.post("/", async (req,res) =>{
    const result = await putTemps()

   try{
    res.status(200).send(result)
   }
   catch(error) {
    res.status(400).send(error.message)
   }
})


module.exports = tempRouter;