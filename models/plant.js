const connection = require('../config/db-config')
const db = connection.promise()

// Get all plants 
const getAll = (req) => {
    let sql = `SELECT p.*, price FROM plant AS p JOIN price ON price.id=p.price_id`
    sqlValue = []
    // if(req.query.category) {
    // sql += `WHERE plant_category = ?`
    // sqlValue.push(req.query.category)
    // return db.query(sql, sqlValue)
    // .then(([result]) => result)
    // } else {
    return db.query(sql)
    .then(([result]) => result)
}

//Get one plant
const getOne = (id) => {
let sql = `SELECT p.*, price FROM plant AS p JOIN price ON price.id=p.price_id WHERE plant_id = ?`
return db.query(sql, [id])
.then(([result]) => result)
}



module.exports = { getAll, getOne }