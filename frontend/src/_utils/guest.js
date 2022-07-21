import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

class Guest {
  static async request(endpoint, data, method) {
    const url = `${BASE_URL}/${endpoint}`;
    try {
      const res = await axios({ url, data, method });
      return res.data;
    } catch (e) {
      throw e.response.data.error.message;
    };
  };

  static async getGuests() {
    const res = await this.request('guests', {}, 'get');
    return res.guests;
  };
  
  static async checkGuest(data) {
    const res = await this.request('check', data, 'post');
    return res.guest;
  };

  static async markNotComing(data) {
    const res = await this.request('not-coming', data, 'post');
    return res.guest;
  };

  static async markComing(data) {
    const res = await this.request('coming', data, 'post');
    return res.guest;
  };
};

export default Guest;