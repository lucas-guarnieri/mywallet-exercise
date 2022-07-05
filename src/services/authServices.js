import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { getUserByEmail, createUser } from "../repositories/userRepositories.js";

export async function createNewUser(name, email, password) {
    const user = await getUserByEmail(email);
    const hashedPassword = bcrypt.hashSync(password, 12);
    if (user.rowCount > 0) throw conflictError();
    await createUser(email, name, hashedPassword);
}

export async function userLogin(email, password) {
    user = await getUserByEmail(email);
    if (user.rowCount < 1 || !bcrypt.compareSync(password, user.password)) throw unauthorizedError();
}

function conflictError() {
    return {
        type: "conflict",
        message: "Email already in use"
    }
}

function unauthorizedError() {
    return {
        type: "unauthorized",
        messsage: "Unauthorized request"
    }
} 