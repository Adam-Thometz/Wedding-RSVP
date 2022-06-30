import React, { useContext } from 'react';
import FormContext from '../../_utils/FormContext';

const IsAttending = () => {
  const { guestInfo } = useContext(FormContext);
  const plusOneFirstName = guestInfo.plusOne.split(' ')[0];
  return (
    <section className='IsAttending'>
      <p>You're in! We look forward to seeing you{plusOneFirstName ? ` and ${plusOneFirstName}` : ''} there! If anything changes, whether you can't make it, {plusOneFirstName ? 'decide to travel solo' : 'found a date'}, or discovered a weird allergy, you can come back to this site on the same device you're using now and update by October 14th! Please keep us in the loop as it helps with planning!</p>

      <p>The reception is taking place on October 22nd, 7pm, at...</p>

      <p>Jumel Terrace Books</p>
      <p>426 W 160th st</p>
      <p>New York, NY 10032</p>

      <p>Other things to note:</p>

      <ul>
        <li>Catering starts at 8 and goes on until 11.</li>
        <li>DJ at 12.</li>
        <li>Reception ends whenever we feel like it!</li>
        <li>There will be an open bar with bartenders and feel free to bring your own alcohol!</li>
        <li>Remember that the theme of the night is Roaring 20s so dress accordingly! Think Great Gatsby or Peaky Blinders and feel free to add a modern spin since we are also technically in the 20's right now!</li>
      </ul>

      <p>Feel free to contact us with questions. Until then, if you'd like to purchase a gift for us, check out the Registry section above for details.</p>
    </section>
  );
};

export default IsAttending;