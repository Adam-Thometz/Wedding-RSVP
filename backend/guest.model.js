"use strict";

const db = require('./db');

class Guest {
  static async getGuests() {
    const result = await db.query(`
      SELECT first_name AS "firstName", last_name AS "lastName", is_coming AS "isComing", plus_one AS "plusOne", diet, email
      FROM guests
    `);
    return result.rows;
  };

  static async checkGuest({ firstName, lastName, zipcode }) {
    const result = await db.query(`
      SELECT first_name, last_name, zipcode
      FROM guests
      WHERE first_name = $1 AND last_name = $2 AND zipcode = $3
    `, [firstName, lastName, zipcode]);

    const guest = result.rows[0];
    return guest;
  };

  static async markNotComing({ firstName, lastName, zipcode, isComing }) {
    const result = await db.query(`
      UPDATE guests
      SET is_coming = $1
      WHERE first_name = $2 AND
            last_name = $3 AND
            zipcode = $4
      RETURNING first_name AS "firstName",
                last_name AS "lastName",
                zipcode,
                is_coming AS "isComing"
    `, [isComing, firstName, lastName, zipcode]);

    const guest = result.rows[0];
    return guest;
  };

  static async markComing({ firstName, lastName, zipcode, isComing, plusOne, diet, email }) {
    const result = await db.query(`
      UPDATE guests
      SET is_coming = $1,
          plus_one = $2,
          diet = $3,
          email = $4
      WHERE first_name = $5 AND
            last_name = $6 AND
            zipcode = $7
      RETURNING first_name AS "firstName",
                last_name AS "lastName",
                zipcode,
                is_coming AS "isComing",
                plus_one AS "plusOne",
                diet,
                email
    `, [isComing, plusOne, diet, email, firstName, lastName, zipcode]);

    // check if there is a plus one listed and look for them in the db
    const plusOneName = plusOne.split(' ');
    if (plusOneName && plusOneName.length === 2) this.markPlusOne({ 
      guestName: `${firstName} ${lastName}`,
      plusOneName
    });

    const guest = result.rows[0];
    return guest;
  };

  static async markPlusOne({ guestName, plusOneName }) {
    await db.query(`
      UPDATE guests
      SET is_coming = 'yes',
          plus_one = $1
      WHERE first_name = $2 AND
            last_name = $3
    `, [guestName, plusOneName[0], plusOneName[1]]);
  };
};

module.exports = Guest;