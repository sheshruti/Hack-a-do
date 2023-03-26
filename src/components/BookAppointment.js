import React from 'react'
import MyData from '../json/fake-api'
const BookAppointment = () => {
	
  return (
	<div>
		<section>
		<h1>Connect to a therapist</h1>

		
		<table className='table'>
			
			<tr>
				<th>User Id</th>
				<th>Name</th>
				<th>Appointment fee</th>
				<th>Contact details</th>
			</tr>
			{MyData.Therapist.map((item, i) => (
		<tr key={i}>
			<td>{item.id}</td>
			<td>{item.name}</td>
			<td>{item.fee}</td>
			<td>{item.contact}</td>
		</tr>
	))}
			
			</table>
	</section>
	</div>
  )
}

export default BookAppointment
