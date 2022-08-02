import React from 'react';

import './Details.css';

const Details = () => {
  return (
    <article>
      <section>
        <h2>Correction</h2>
        <article>
          The invite says to RSVP by August 1st. Well, life got in the way and we got them out ON August 1st! Now, RSVP by September 15th!
        </article>
      </section>
      <section id="details">
        <h2>Details</h2>
        <article>
          In numerology, 22 is considered to be the most powerful number. It is a “master number” which represents the fulfillment of one’s greatest aspirations. To ring in that positive energy, we are inviting our most beloved friends and family to celebrate our marriage on 10/22/2022. So, put on your rag glads and sparkly outfit and come to our roaring 20’s themed cocktail wedding reception! The actual wedding will take place in a small ceremony but we definitely want to celebrate this special event with everyone else! 
        </article>
      </section>
      <section id='registry'>
        <h2>Registry</h2>
        <article>
          Having our loved ones there is the best gift of all, but... if you'd like and are able to buy us a gift, we have a registry <a href='https://www.myregistry.com/wedding-registry/adam-thometz-and-melody-acosta-bronx-ny/3406077'>here</a>.
        </article>
      </section>
      <section id='RSVP'>
        <h2>RSVP</h2>
        <article>
          Let us know if we should expect you, have any food allegeries or plan to bring someone.
        </article>
      </section>
    </article>
  );
};

export default Details;