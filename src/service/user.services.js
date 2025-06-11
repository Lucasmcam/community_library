import userRepository from '../repositories/user.repositories.js';

async function createUserService(newUser) {
    const user = await userRepository.createUsersRepository(newUser)
    return user;
}

export default {
    createUserService
}

