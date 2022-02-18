export const createOneClasse = (req, res, next) => {
    res.status(200).json({ message: `create a classe` });
}

export const getClasses = (req, res, next) => {
    res.status(200).json({message : 'All Classes'});
}

export const getOneClasseById = (req, res, next) => {
    const classeId = req.params.id;
    res.status(200).json({ message: `get a classe by its id ${classeId}` });
}

export const updateOneClasseById = (req, res, next) => {
    const classeId = req.params.id;
    res.status(200).json({ message: `update a classe by its id ${classeId}` });
}

export const deleteOneClasseById = (req, res, next) => {
    const classeId = req.params.id;
    res.status(200).json({ message: `delete a classe by its id ${classeId}` });
}

