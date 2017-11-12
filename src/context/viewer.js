import axios from 'axios';
import Config from '../config/config';
import User from '../stores/User';

export default (state) => {
  console.log(new Config());
  const { ebs } = new Config();

  const request = axios.create({
    baseURL: `${ ebs.url }`,
    timeout: 1000
  });

  return {
    state,
    store: {
      user: new User(request, state)
    }
  }
}
