const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const {query, body, validationResult} = require('express-validator')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

const today = new Date().toISOString().slice(0, 10);
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "1999MySqlOtis",
    database: 'Restaur'
})
db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});



const query_and_send = (qstring, res) => {
    db.query(qstring, (err, result) => {
        if (err) {
            return res.status(400).json(err)
        } else {
            return res.status(200).json(result)
        }
    })
}



app.get('/retrieveBooking', (req,res) => {
    const id = req.query.id
    const lName = req.query.lName
    const query = `SELECT * FROM BOOKINGS WHERE BookingID = ${id} AND LastName="${lName}"` 
    
    query_and_send(query, res)
})






app.get('/checkAvailability', 
            query('Mobile').isMobilePhone(),
            query('date').isAfter(today),

            (req, res) => {
    
    const {partySize, date, CheckInTime, CheckOutTime} = req.query
    const errors = validationResult(req);

    const query = `
    SELECT TableID FROM TABLES R
    WHERE capacity > ${partySize} AND NOT EXISTS 
    (SELECT * FROM BOOKINGS 
     WHERE TableID = R.TableID
        AND Date = '${date}'
        AND CheckOutTime BETWEEN '${CheckInTime}' and '${CheckOutTime}'
    )`

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    query_and_send(query, res)
})







app.post('/addBooking', (req, res) => { //slots 0900-1100, 11-1300, 1300-1500, 1500-1700
    const {FirstName, LastName, PartySize, Date, From, To, Mobile, table} = req.body

    const insert = `INSERT INTO BOOKINGS (TableID, Guests, Date, CheckInTime, CheckOutTime, FirstName, LastName, Contact)
                    VALUES ('${table}', '${PartySize}', '${Date}' ,'${From}', '${To}', '${FirstName}', '${LastName}', '${Mobile}')
                    `
   query_and_send(insert, res)
})


app.delete('/deleteBooking', (req,res) => {
    const id = req.body.id
    const del = `DELETE FROM BOOKINGS WHERE BookingID = ${id}`
    query_and_send(del, res)
})



const port = "8080"
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})




