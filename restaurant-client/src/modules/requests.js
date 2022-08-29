
async function fetcher(url, method, body) {
        const resp = await fetch(url, { method: method, body: body, headers: { 'Content-Type': 'application/json' }})
        const json = resp.json()
        return Promise.resolve(json)
    }
    

const getAvailability = (event, data, setRes, setErr) => {
        event.preventDefault()
        const { PartySize, Date, From, To, Mobile } = data
        console.log(data)
        const url = `https://le-restaurant-heroku.herokuapp.com/checkAvailability?partySize=${PartySize}&date=${Date}&CheckInTime=${From}&CheckOutTime=${To}&&Mobile=${Mobile}`
        fetcher(url, 'GET', null)
                .then(r => {
                        if (r.errors) {
                                setErr(r.errors)
                        } else {
                                
                                setRes(r)
                        }
                })
                .catch(err => console.log(err))
}

const sendBooking = (event, formData, setBookId) => {
        event.preventDefault()
        const url = 'https://le-restaurant-heroku.herokuapp.com/addBooking'

        fetcher(url, "POST", JSON.stringify(formData))
                .then(res => {
                        if (res.insertId) {
                                setBookId(res.insertId)
                        } else {
                                alert("Error. Please try again")
                        }
                }
                )
}


const get_booking = (event, queryData, setIsSearched, setData) => {
        event.preventDefault()
        const url = `https://le-restaurant-heroku.herokuapp.com/retrieveBooking?id=${queryData.id}&lName=${queryData.lName}`
        fetcher(url, "GET", null)
                .then(r => {
                        if (r[0]) {
                                setIsSearched(true)
                                setData(r[0])
                        } else {
                                alert("Error: Booking does not exist")
                        }
                })
}


const delete_booking = (event, setRefresh, dataArr) => {
        event.preventDefault()
        const url = "https://le-restaurant-heroku.herokuapp.com/deleteBooking"
        const body = JSON.stringify({id: dataArr[0][1]})
        fetcher(url, "DELETE", body)
                .then(resp => {
                        alert("Booking Deleted")
                        setRefresh(true)
                        console.log(resp)
                }).catch( err =>{ 
                        alert("Error while deleting booking")
                        console.log(err)
                })
} 


export { getAvailability, sendBooking, get_booking, delete_booking}