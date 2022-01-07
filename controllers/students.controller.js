export const getStudents = (req, res, next) => {
    res.status(200).json({message : 'Hello All Students', students });
}

export const getOneStudentById = (req, res, next) => {
    const studentId = req.params.id;
    res.status(200).json({ message: `get a student by its id ${studentId}` });
}

export const updateOneStudentById = (req, res, next) => {
    const studentId = req.params.id;
    res.status(200).json({ message: `update a student by its id ${studentId}` });
}

export const deleteOneStudentById = (req, res, next) => {
    const studentId = req.params.id;
    res.status(200).json({ message: `delete a student by its id ${studentId}` });
}

export const createOneStudent = (req, res, next) => {
    const studentId = req.params.id;
    res.status(200).json({ message: `create a student by its id ${studentId}` });
}

