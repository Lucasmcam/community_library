import db from '../configs/database.js';

db.run(
    `
    CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    userId INTEGER,
    FOREIGN KEY (userId) REFERENCES users(id)
    )`);

function createBookRepository(newBook, userId) {
    return new Promise((resolve, reject) => {
        const { title, author } = newBook;
    db.run(
        `INSERT INTO books (title, author, userId) VALUES (?, ?, ?)`,
        [title, author, userId],
        function (err) {
            if (err) {
                reject(err);
            } else {
                resolve({ id: this.lastID, ...newBook });
            }
        }
    )
    })
}

function findAllBooksRepository() {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM books`, [], (err, rows) => {
             if (err) {
                reject(err);
            } else {
                resolve({ rows });
            }
        })
    }) 
    
}

function findBookByIdRepository(bookId) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM books WHERE id = ?`, [bookId], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
}

function updateBookRepository(updateBook, bookId) {
    return new Promise((resolve, reject) => {
        const fields = ['title', 'author', 'userId'];
        let query = 'UPDATE books SET';
        const values = [];

        fields.forEach(field => {
            if (updateBook[field] !== undefined) {
                query += `${field} = ?,`;
                values.push(updateBook[field]);
            }
        })

        query = query.slice(0, -1);

        query += ' WHERE id = ?';
        values.push(bookId);

        db.run(query, values, function (err) {
            if (err) {
                reject(err);
            } else {
                resolve({ id: bookId, ...updateBook});
            }
        })
    })
}

function deleteBookRepository(bookId) {
    return new Promise((resolve, reject) => {
        if (err) {
            reject(err)
        } else {
            resolve({ message: 'Book deleted succesfully', bookId });
        }
    });
};

export default {
    createBookRepository,
    findAllBooksRepository,
    findBookByIdRepository,
    updateBookRepository,
    deleteBookRepository
}