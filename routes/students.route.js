import express from "express";
import faker from "faker";

export const router = express.Router();

const createStudents = (n) => {
    const students = [];
    
    for(let i = 0; i <= n; i++) {
        students.push({
            id: faker.datatype.uuid(),
            name: faker.name.firstName(),
            cursurs: faker.name.jobType(),
            average: faker.datatype.number({min: 10, max: 20}),
        })
    };
    return students;
}


// GET Permet de récupérer la donnée //
router.get("/", (req, res) => {
// const students = [
//     {
//         id: faker.datatype.uuid(),
//         name: faker.name.firstName(),
//         cursurs: faker.name.jobType(),
//         average: faker.datatype.number({min: 10, max: 20}),
//     },
// ];
    const students = createStudents(5);

    res.status(200).json({message : 'Hello All Students', students });
});

// router.get("/:id", (req, res) => {
//     res.send('Test ID')
// });

router.get("/:id", (req, res) => {
    const studentID = req.params.id;
    res.status(200).json({message : `Get Student #${studentID}`});
    // res.status(200).send(`Get Student #${studentID}`)
});

// Post permet de créer //
router.post("/", (req, res) => {
    console.log(req.body);
    const {id, name, location } = req.body;
    // console.log("router.post ~ location", location)
    // console.log("router.post ~ name", name)
    // console.log("router.post ~ id", id)

    // Object.keys(req.body).map((key) => console.log(key, req.body[key]));
    // const tmp = Object.values(req.body).filter((value) => value.length <= 4);
    // console.log("router.post ~ tmp", tmp);

    res.status(200).send(
    `Create New Student width id #${id}, name ${name} and location ${location}`
    );
});

// Récupérer le id //
// Récupéré le body //
// Permet de modifier //
router.put("/:id", (req, res) => {
    const newStudentId = req.params.id;
    const body = req.body;
    console.log(body)
    res.status(200).send(`update a student by its id ${newStudentId}`);
});

// Supprimer le id //
// Permet de supprimer //
router.delete("/:id", (req, res) => {
    const deleteStudentId =  req.params.id;

    res.status(200).send(`delete a student by its id ${deleteStudentId}`);
});







