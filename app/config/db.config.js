export default {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "1234",
    DB: "bolao",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};