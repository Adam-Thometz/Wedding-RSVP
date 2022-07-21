import React, { useContext } from 'react';
import FormContext from '../../../_utils/FormContext';

import './IsAttending.css';

const IsAttending = () => {
  const { guestInfo } = useContext(FormContext);
  const plusOneFirstName = guestInfo.plusOne.split(' ')[0];
  return (
    <article className='IsAttending'>
      <p>You're in! We look forward to seeing you{plusOneFirstName ? ` and ${plusOneFirstName}` : ''} there! If anything changes, you can come back to this site and refill the form by September 15th!</p>

      <p>The reception is taking place on October 22nd, 7pm, at...</p>

      <address>
        Jumel Terrace Books<br />
        426 W 160th st<br />
        New York, NY 10032
      </address>

      <p>Other things to note:</p>

      <ul>
        <li>Unless you're a parent, sibling, bestman, or maid of honor, <i>your invite is for the reception only</i>. We have chosen to keep our ceremony private - please respect our wishes. You'll still have access to photos of the ceremony.</li><br />
        <li>The theme of the night is Roaring 20s so dress accordingly! Think Great Gatsby or Peaky Blinders. You may add a modern spin since we're also in the 20's!</li><br />
        <li>Lots of finger food will be provided and there will be an open bar with a bartender. Feel free to bring your own alcohol as well!</li>
      </ul>

      <p>Feel free to contact us with questions. Until then, if you'd like to purchase a gift for us, <a href="#registry">check out our registries!</a></p>
    </article>
  );
};

export default IsAttending;