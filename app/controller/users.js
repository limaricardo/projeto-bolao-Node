import db from "../models/index.js";

const User = db.users;

export const listUsers = async (request, response) => {
    return await User.findAll()
}

export const addUser = async (request, response) => {
    const userCreated = await User.create({
        username: request.body.username,
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
    });

    response.redirect('/login')
}
