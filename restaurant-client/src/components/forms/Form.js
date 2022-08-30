import React from 'react'
const Form = ({ data }) => {

    return (
        <div className='main-form'>
            <div className='instruction'>
                <h>
                    Please enter booking information
                </h>
            </div>

            <div>
                <label>First Name:</label>
                <input type="text" onChange={e => { data.FirstName = e.target.value }} />
            </div>

            <div>
                <label>Last Name:</label>
                <input type="text" onChange={e => { data.LastName = e.target.value }} />
            </div>

            <div>
                <label>Date:</label>
                <input type="date" onChange={e => { data.Date = e.target.value }} />
            </div>

            <div>
                <label>No. People:</label>
                <input type='number' min="1" max="10" onChange={e => { data.PartySize = e.target.value }} required />
            </div>
            <div>
                Opening times 09:00 - 17:00
            </div>

            <div>
                <label>From:</label>
                <input type="time" min="09:00" max="17:00" onChange={e => { data.From = e.target.value }} required />
            </div>

            <div>
                <label>Until:</label>
                <input type="time" min="09:00" max="17:00" onChange={e => { data.To = e.target.value }} required />
            </div>

            <div>
                <label>Mobile:</label>
                <input type="tel" onChange={e => { data.Mobile = e.target.value }} required />
            </div>

            <div className='submit'>
                <input type='submit' value="Check Availability" />
            </div>

        </div>
    )
}

export default Form
