const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())

//app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.json())



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




app.get('/checkAvailability', (req, res) => {

    const partySize = req.query.partySize
    const date = req.query.date
    const CheckInTime = req.query.CheckInTime
    const CheckOutTime = req.query.CheckOutTime

    const query = `SELECT TableID FROM TABLES R
    WHERE capacity > ${partySize} AND NOT EXISTS 
    (SELECT * FROM BOOKINGS 
     WHERE TableID = R.TableID
        AND cDate = '${date}'
        AND CheckOutTime BETWEEN '${CheckInTime}' and '${CheckOutTime}'
    )
    `

    db.query(query, (err, result) => {

        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).json(result)
        }
    })
})



app.post('/addBooking', (req, res) => { //slots 0900-1100, 11-1300, 1300-1500, 1500-1700


    const fname = req.body.fName
    const lname = req.body.lName
    const partySize = req.body.party
    const date = req.body.date
    const CheckInTime = req.body.from
    const CheckOutTime = req.body.to
    const contact = req.body.contact
    const idTables = req.body.table


    const insert = `INSERT INTO BOOKINGS (TableID, Guests, cDate, CheckInTime, CheckOutTime, fName, lName, Contact)
                    VALUES ('${idTables}', '${partySize}', '${date}' ,'${CheckInTime}', '${CheckOutTime}', '${fname}', '${lname}', '${contact}')
                    `

    //WHERE NOT EXISTS (SELECT * FROM BOOKINGS WHERE cDate='${date}' AND Contact = '${contact}')

    db.query(insert, (err, result) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).json(result)
        }
    })
})




app.post('/test', (req,res)=>{
    console.log("d",req.body.fName)
    res.status(200).json(req.body)

})


app.listen("8080", () => {
    console.log('server running on port 8080')
})




