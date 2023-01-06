import * as mysql from 'mysql2';

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"express_db"
})

export default connection