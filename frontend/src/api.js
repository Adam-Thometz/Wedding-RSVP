import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

class Api {
  static async request(endpoint, data) {
    const url = `${BASE_URL}/${endpoint}`;
    try {
      const res = await axios.post(url, data)
      return res.data;
    } catch (e) {
      throw e.response.data.error.message;
    };
  };
  
  static async checkGuest(data) {
    const res = await this.request('check', data);
    return res.guest;
  };

  static async markNotComing(data) {
    const res = await this.request('not-coming', data);
    return res.guest;
  };

  static async markComing(data) {
    const res = await this.request('coming', data);
    return res.guest;
  };
};

export default Api;