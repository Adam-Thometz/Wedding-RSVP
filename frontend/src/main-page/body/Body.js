import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Body.css';

const Body = () => {
  const navigate = useNavigate();
  
  const goToRSVP = () => navigate('/rsvp');

  return (
    <main>
      <section>
        <h2>Details</h2>
        <article>
          In numerology, 22 is considered to be a master number, a symbol of creativity and power. Let’s celebrate as if the Great Depression hasn't happened yet! Put on your glad rags and sparkly outfits to celebrate the marriage of Melody and Adam with a roaring 20’s themed cocktail wedding reception! 
        </article>
      </section>
      <section>
        <h2>Registry</h2>
        <article>
          Having our loved ones there is the best gift of all, but... if you'd like and are able to buy us a gift, we have registries at <a href='#'>CB2</a> and <a href='#'>Amazon</a>.
        </article>
      </section>
      <section>
        <h2>RSVP</h2>
        <p>Let us know if you plan to come by going to the RSVP page. Click below to continue.</p>
        <button onClick={goToRSVP}>Go to RSVP</button>
      </section>
    </main>
  );
};

export default Body;