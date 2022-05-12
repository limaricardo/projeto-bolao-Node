import dbConfig from "../config/db.config.js";
import Sequelize from "sequelize"
import model from "./model.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.ide
    },
    logging: false
});

const db ={};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
const loadedModels = model(sequelize, Sequelize);
db.matches = loadedModels.Match;
db.seasons = loadedModels.Season;
db.teams = loadedModels.Team;

export default db;