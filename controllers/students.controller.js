import { Student } from "../schemas/Student.schema.js";

export const createOneStudent = async (req, res, next) => {
    const { email, entranceFee, name, role } = req.body;
  
    try {
      const student = new Student({ email, entranceFee, name, role });
      await student.save();
  
      return res.status(200).json({
        message: "New student created",
        data: student,
      });
    } catch (error) {
      res.status(400).json({
        message: "An error occured, please check logs for more details",
        errorMessage: error.message,
        error,
      });
    }
  };

export const getStudents = async (req, res, next) => {
    try {
      const students = await Student.find();
  
      return res.status(200).json({
        message: "Students retrieved",
        data: students,
      });
    } catch (error) {
      res.status(400).json({
        message: "An error occured, please check logs for more details",
        errorMessage: error.message,
        error,
      });
    }
  };

  export const getOneStudentById = async (req, res, next) => {
    const studentId = req.params.id;
  
    try {
      const student = await Student.findById(studentId);
  
      if (!student) {
        return res.status(200).json({
          message: `Invalid studentId - No Student matched id #${studentId}`,
          data: null,
        });
      }
  
      return res.status(200).json({
        message: `Student #${studentId} retrieved`,
        data: student,
      });
    } catch (error) {
      res.status(400).json({
        message: "An error occured, please check logs for more details",
        errorMessage: error.message,
        error,
      });
    }
  };

  export const updateOneStudentById = async (req, res, next) => {
    const studentId = req.params.id;
  
    try {
      const student = await Student.findByIdAndUpdate(studentId, req.body);
  
      if (!student) {
        return res.status(200).json({
          message: `Invalid studentId - No Student matched id #${studentId}`,
          data: null,
        });
      }
  
      return res.status(200).json({
        message: `Student #${studentId} updated`,
        data: student,
      });
    } catch (error) {
      res.status(400).json({
        message: "An error occured, please check logs for more details",
        errorMessage: error.message,
        error,
      });
    }
  };

export const deleteOneStudentById = async (req, res, next) => {
    const studentId = req.params.id;
  
    try {
      const student = await Student.findByIdAndRemove(studentId);
  
      if (!student) {
        return res.status(200).json({
          message: `Invalid studentId - No Student matched id #${studentId}`,
          data: null,
        });
      }
  
      return res.status(200).json({
        message: `Student #${studentId} deleted`,
        data: student,
      });
    } catch (error) {
      res.status(400).json({
        message: "An error occured, please check logs for more details",
        errorMessage: error.message,
        error,
      });
    }
  };

  export const deleteAllStudents = async (req, res, next) => {
    try {
      await Student.deleteMany();

      return res.status(200).json({
        message: `All students deleted`
      });
    } catch (error) {
      res.status(400).json({
        message: "An error occured, please check logs for more details",
        errorMessage: error.message,
        error,
      });
    }
  }
  


