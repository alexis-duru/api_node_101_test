import express from "express";
import faker from "faker";

import { 
    getStudents, 
    createOneStudent,
    getOneStudentById,
    updateOneStudentById,
    deleteOneStudentById,
    
} from "../controllers/students.controller.js";

export const router = express.Router();


router.route("/").get(getStudents).post(createOneStudent);
router.route("/:id").get(getOneStudentById).delete(deleteOneStudentById).put(updateOneStudentById)








