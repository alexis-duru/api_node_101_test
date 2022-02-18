import express from "express";
import { 
    getClasses, 
    createOneClasse,
    getOneClasseById,
    updateOneClasseById,
    deleteOneClasseById,
    
} from "../controllers/classes.controller.js";

export const router = express.Router();


router.route("/").get(getClasses).post(createOneClasse)
router.route("/:id").get(getOneClasseById).delete(deleteOneClasseById).put(updateOneClasseById)