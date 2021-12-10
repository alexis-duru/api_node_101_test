// Chargement d'express //

// const express = require('express');
import bodyParser from "body-parser";

import express from "express";
import { router as studentRouter } from "./routes/students.route.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CHEMIN RACINE //
app.get("/", (req, res) => {
    res.send("B3 WEB");
});

// app.get("/students", (req, res) => {
//     res.send("Hello Student");
// });

app.use("/students", studentRouter);

app.listen(3000, console.log("server running on port 3000..."));





