import React from 'react'
import { delete_booking } from '../modules/requests'

const Confirm = ({ id, dataArr, setRefresh }) => {




	return (
		<div className='confirm-booking'>
			<div>
				<h2>
					Your booking reference {id}
				</h2>
			</div>
			<div>
				{
					dataArr.map( kv_pair => <div key={kv_pair[0]}><p><span>{kv_pair[0]}:</span>{kv_pair[1]}</p></div>)
				}
			</div>

			<div className='option-buttons'>
				<div>
					<button type="button" onClick={() => setRefresh(true)}>home</button>
				</div>
				<div>
					<button type="button" onClick={ e => delete_booking(e, setRefresh, dataArr)}>Delete booking</button>
				</div>
			</div>
		</div>
	)
}

export default Confirm