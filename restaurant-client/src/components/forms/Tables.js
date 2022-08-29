import React from 'react'
const Tables = ({ tb, data }) => {

    return (
        <div>
            <label>Table {tb.TableID}</label>
            <input type="radio" name="tableSelect" value={tb.TableID} onChange={() => data.table = Number(tb.TableID)} />
        </div>
    )
}

export default Tables