import React,{useContext} from 'react'
import GuestContext from '../../context/guestContext/guestContext'

const GuestCounter = () => {
  const {guests}=useContext(GuestContext)
  const totalInvited = guests.length
  const attending = guests.filter(guest=>guest.isconfirmed)
  const totalAttending = attending.length
  const invitedByByDiet = (type)=> guests.filter(guest => guest.dietary === type).length
  const attendingByDiet = (type)=> attending.filter(guest => guest.dietary === type).length
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Guest</th>
            <th>Invited</th>
            <th>Attending</th>
          </tr>
          <tr>
            <th>Non-Veg</th>
            <td>{invitedByByDiet('Non-Veg')}</td>
            <td>{attendingByDiet('Non-Veg')}</td>
          </tr>
          <tr>
            <th>Vegan</th>
            <td>{invitedByByDiet('Vegan')}</td>
            <td>{attendingByDiet('Vegan')}</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>{totalInvited}</td>
            <td>{totalAttending}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default GuestCounter