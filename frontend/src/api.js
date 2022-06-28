import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

class Api {
  static async request(endpoint, data = {}, method = 'get') {
    const url = `${BASE_URL}/${endpoint}`;
    const params = method === 'get' ? data : {};
    try {
      return (await axios({ url, data, method, params })).data;
    } catch (e) {
      throw e.response.data.error.message;
    };
  };
  
  static async checkGuest({ firstName, lastName, zipcode }) {
    debugger;
    const res = await this.request(`${firstName}/${lastName}/${zipcode}`);
    return res.success;
  };

  static async markGuest(data) {
    const res = await this.request('', data, 'post');
    return res.guest;
  };
};

export default Api;