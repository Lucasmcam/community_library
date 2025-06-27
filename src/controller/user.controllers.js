import userService from '../service/user.services.js';
import { loginService } from '../service/auth.services.js';

async function createUserController(req, res){
    const newUser = req.body;

    try {
        const token = await userService.createUserService(newUser);
        res.status(201).send({ token })
    } catch (err) {
        res.status(400).send(err.message)
    }
}

async function loginUserController(req, res){
    const { email, password } = req.body;

    try {
        const token = await loginService(email, password);
        res.send({ token })
    } catch (err) {
        res.status(400).send(err.message)
    }
}

async function findAllUserController(req, res){
    try {
        const users = await userService.findAllUsersService()
        res.send({ users });
    } catch (err) {
        return res.status(404).send(err.message);
    }
}

async function findUserByIdController(req, res) {
    const { id } = req.params

    try {
        const user = await userService.findUserByIdService(id)
        res.send({ user });
    } catch (err) {
         return res.status(404).send(err.message);
    }
}

async function updateUserController(req, res){
    const { id } = req.params;
    const newUser = req.body;

    try {
        const user = await userService.updateUserService(newUser, id)
        res.send({ user });
    } catch (err) {
        return res.status(404).send(err.message);
    }
}

async function deleteUserController(req, res){
    const { id } = req.params;

    try {
        const user = await userService.deleteUserService(newUser, id)
        res.send({ message });
    } catch (err) {
        return res.status(404).send(err.message);
    }
}

export default {
    createUserController,
    findAllUserController,
    findUserByIdController,
    updateUserController,
    deleteUserController,
    loginUserController
}