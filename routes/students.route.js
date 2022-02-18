import express from "express";
import faker from "faker";

import { 
    getStudents, 
    createOneStudent,
    getOneStudentById,
    updateOneStudentById,
    deleteOneStudentById,
    deleteAllStudents,
    
} from "../controllers/students.controller.js";

export const router = express.Router();


router.route("/").get(getStudents).post(createOneStudent).delete(deleteAllStudents);
router.route("/:id").get(getOneStudentById).delete(deleteOneStudentById).put(updateOneStudentById)








