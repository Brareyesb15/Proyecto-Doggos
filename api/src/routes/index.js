const { Router } = require('express');
const dogRouter = require("./dogsRouter.js")
const tempRouter = require("./tempsRoute.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", dogRouter)

router.use("/temps", tempRouter)
// router.use("/temperaments",tempRoute)

module.exports = router;
