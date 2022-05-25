import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./app/models/index.js";
import { listMatches, importMatches } from "./app/controller/match.js";
import { listTeams } from "./app/controller/teams.js";
import { listUsers, addUser } from "./app/controller/users.js";

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

db.sequelize.sync({ alter: true});

app.get("/", (request, response) => {
    response.json({ message: "Welcome to Bolão." })
});

app.get("/match", (request, response) => {
    listMatches(request, response)
});

app.get("/importMatches", (request, response) => {
    importMatches(request, response)
});

app.get("/teams", (request, response) => {
    listTeams(request, response);
});

app.get("/user", (request, response) => {
    listUsers(request, response);
});

app.post("/user", (request, response) => {
    addUser(request, response);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});