import { v4 as uuidV4 } from 'uuid';
import sqlite from 'sqlite3';
sqlite.verbose()
const db = new sqlite.Database('./data.db', sqlite.OPEN_READWRITE,(err) => {
    if (err) return console.log(err);

})

db.run('CREATE TABLE IF NOT EXISTS data(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT VARCHAR(255), surname TEXT VARCHAR(255), salary INTEGER)')


export const getUsers = function(req, res) {
    db.all("SELECT * FROM data", (err, rows)=> {
        res.send(rows)
    })
}

export const createUser = function(req, res){
    const {name, surname, salary} = req.body
   db.run("INSERT INTO data(name, surname, salary) VALUES(?,?,?)", name, surname, salary) 
   res.send('created')
}

export const deleteUser = function(req, res) {
    const userId = req.params.id
   db.run(`DELETE FROM data WHERE id = ${userId}`) 
   res.send("delete")
}

export const updateUser = function(req, res) {
    const userId = req.params.id
    const {name, surname, salary} = req.body
    db.run(`UPDATE data SET name=?,surname=?,salary=? WHERE id =${userId}`,name, surname, salary )
res.send("update")
}