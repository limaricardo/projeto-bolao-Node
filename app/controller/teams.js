import axios from "axios";
import db from "../models/index.js";
import footballOrg from "../api/footballOrg.js"

const Teams = db.teams;

export const importTeams = async (request, response) => {
    const res = await footballOrg.get('/competitions/WC/teams');

    try {
        const data = await Teams.bulkCreate(res.data.teams)
        response.send(data);
    }
    
    catch(err) {
        response.send(err)
        console.log(err.errors[0].message);
    }
    
};

export const listTeams = async (request, response) => {
    return Teams.findAll()
}
