import express from "express";

import routerProduct from "./ProductRouter.js";
import routerClient from "./ClientRouter.js";
import routerEmployee from "./EmployeeRouter.js";
import routerEmployeeAbility from "./EmployeeAbilityRouter.js";
import routerProvider from "./ProviderRouter.js";
import routerTask from "./TaskRouter.js";

const router = express.Router();

router.use("/produtos", routerProduct);

router.use("/clientes", routerClient);

router.use("/funcionarios/habilidades", routerEmployeeAbility);

router.use("/funcionarios", routerEmployee);

router.use("/fornecedores", routerProvider);

router.use("/servicos", routerTask);

export { router };
