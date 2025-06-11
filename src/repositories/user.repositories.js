import db from '../configs/database.js';

db.run(`
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    avatar TEXT
    )
`)

function createUsersRepository(NewUser) {
    return new Promise ((res, rej) => {
       const {username, email, password, avatar} = NewUser
        db.run(
            `
            INSERT INTO users (username, email, password, avatar)
            VALUES(?, ?, ?, ?)
            `,
            [username, email, password, avatar],
            (err) => {
                if (err) {
                    rej(err)
                } else {
                    res({id: this.lastID, ...NewUser})
                }
            }
        )
    })
}

export default {
    createUsersRepository
}