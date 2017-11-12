import axios from 'axios';
import Config from '../config/config';

export default (state) => {
  const { ebs } = new Config();
  const request = axios.create({
    baseURL: `${ ebs.url }`,
    timeout: 1000
  });

  return {
    state,
    store: { }
  }
}
