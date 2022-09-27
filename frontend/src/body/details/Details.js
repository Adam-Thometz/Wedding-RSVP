import React from 'react';

import './Details.css';

const Details = () => {
  return (
    <article>
      <section>
        <h2>Wedding Postponement</h2>
        <article>
          Due to family illness, we have decided to postpone the wedding. The new date will be April 22nd, 2023.
        </article>
      </section>
      <section id="details">
        <h2>Details</h2>
        <article>
          In numerology, 22 is considered to be the most powerful number. It is a “master number” which represents the fulfillment of one’s greatest aspirations. To ring in that positive energy, we are inviting our most beloved friends and family to celebrate our marriage on 04/22/2023. So, put on your glad rags and sparkly outfit and come to our roaring 20’s themed cocktail wedding reception! The actual wedding will take place in a small ceremony but we definitely want to celebrate this special event with everyone else during our reception!
        </article>
      </section>
      <section id='registry'>
        <h2>Registry</h2>
        <article>
          Having our loved ones there is the best gift of all, but... if you'd like and are able to buy us a gift, <a href='https://www.myregistry.com/wedding-registry/adam-thometz-and-melody-acosta-bronx-ny/3406077'>check out our registry</a>. You can buy us a gift or contribute to our honeymoon fund! If you buy something for us, don't forget to return to the registry and mark that you bought it.
        </article>
      </section>
      <section id='RSVP'>
        <h2>RSVP</h2>
        <article>
          Let us know if we should expect you, have any food allegeries, or plan to bring someone.
        </article>
      </section>
    </article>
  );
};

export default Details;