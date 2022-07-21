import React, { useEffect, useState } from 'react';
import Guest from '../_utils/guest';

const GuestList = () => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    async function getAllGuests() {
      const result = await Guest.getGuests();
      debugger;
      setGuests(result);
    }
    getAllGuests();
  }, []);

  const guestDisplay = guests.map(guest => {
    const { firstName, lastName, isComing, plusOne, diet, email } = guest;
    return (
      <tr>
        <td>{firstName} {lastName}</td>
        <td>{isComing}</td>
        <td>{plusOne}</td>
        <td>{diet}</td>
        <td>{email}</td>
      </tr>
    );
  });

  return (
    <div className='GuestList'>
      <h1>Guest List</h1>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>RSVP</td>
            <td>Plus One</td>
            <td>Diet Restrictions</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {guestDisplay}
        </tbody>
      </table>
    </div>
  );
};

export default GuestList;