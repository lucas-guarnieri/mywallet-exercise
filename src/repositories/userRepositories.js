import connection from "../database";

export async function getUserByEmail(email){
    return connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
      );
}

export async function createUser(email, name, hashedPassword){
    return connection.query(
        `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
        [name, email, hashedPassword]
    );
}

