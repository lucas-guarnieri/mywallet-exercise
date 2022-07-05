import { createNewUser, userLogin } from "../services/authServices.js";

export async function signup(req, res) {
    const { name, email, password } = req.body;
    
   await createNewUser(name, email, password);

}

export async function signin(req, res) {
    const { email, password } = req.body;
    const token = await userLogin(email, password);
    res.send({ token });
}