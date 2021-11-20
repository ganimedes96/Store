const sqlite3 = require("sqlite3").verbose();

//criar o objeto de banco de dados
const db = new sqlite3.Database("./src/db/Database.db");


module.exports = db

//utilizar o objeto de banco de dados, para nossas operacoes

db.serialize(() => {
  db.run(`
        CREATE TABLE IF NOT EXISTS watch
         (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            price TEXT

        )
    `);
//   const query = `
//     INSERT INTO relogios (
//         name,
//         price
//     )VALUES(
//         ?,?,?
//     )
// `;
// const value = [
//     'Relogio masculino',
//     '500'
// ]

//   function afterInsertData(err){
//     if (err){
//         return console.log(err)
//     }
//     console.log('Cadastrado com sucesso')
//     console.log(this)
//   }      

//   db.run(query,value, afterInsertData)
// 
});
