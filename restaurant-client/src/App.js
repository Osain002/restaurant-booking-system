import './App.css';
import React from 'react';
import { useState } from 'react'

import Form from './components/forms/Form';
import Tables from './components/forms/Tables';
import Confirm from './components/Confirm';
import Search from './components/Search';
import {getAvailability, sendBooking, get_booking} from './modules/requests'

function App() {
    const [availability, setAvailability] = useState()
    const [bookId, setBookId] = useState()
    const [formErrors, setFormErrors] = useState()
    const [isSearched, setIsSearched] = useState(false)
    const [queryData, setQueryData] = useState({id: '',lName: ''})
    const [refresh, setRefresh] = useState(false)
    const [data, setData] = useState({
        Date: '',
        PartySize: '',
        From: '',
        To: '',
        Table: '',
        FirstName: '',
        LastName: '',
        Mobile: '',
    })


    //conditional rendering logic vv

    var show
    var showErrors = ""
    if (formErrors){
        showErrors = (
            <div className='errors'>
                {
                    formErrors.map(error => (
                        <p>Error: {error.msg}</p>
                    ))
                }
            </div>
        )
        
    }
    if (!bookId && availability) {
        //setFormErrors()
        show = (
            <form onSubmit={e => sendBooking(e, data, setBookId)} className="main-form">
                {
                    availability.map(tb => <Tables tb={tb} data={data} key={tb.TableID} />)
                }
                <div>
                    <input type="submit" value="Book" className='submit'/>
                </div>
            </form>
        )
    } else if (!bookId) {
        show = (
            <div>
                
                <form onSubmit={e => getAvailability(e, data, setAvailability, setFormErrors)}>
                {showErrors}
                    <Form data={data} />
                </form>
                <Search get_booking={get_booking} queryData={queryData} setIsSearched={setIsSearched} setData={setData}/>
            </div>)
    } else {
        //etFormErrors()
        show = <Confirm id={bookId} dataArr={Object.entries(data)} setRefresh={setRefresh} /> 
    }

    if (isSearched && data){ //when a booking is searched, display that booking
        show = <Confirm id={data.B} dataArr={Object.entries(data)} setRefresh={setRefresh}/>
    }





    if(refresh){ 
        setAvailability()
        setBookId()
        setFormErrors()
        setIsSearched(false)
        setRefresh(false)
        setData({
            Date: '',
            PartySize: '',
            From: '',
            To: '',
            Table: '',
            FirstName: '',
            LastName: '',
            Mobile: '',
        })
    }





    return (
        <div>
            <div className='title'>
                <h1>
                    LeRestaurant
                </h1>
            </div>
            <div className='form-container'>
                {show}
            </div>
            
        </div>
    )
}

export default App;
