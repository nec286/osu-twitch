import axios from 'axios';
import config from 'config/config';
import Root from 'stores/Root';

export default (state) => {
  const { ebs } = config();

  const request = axios.create({
    baseURL: `${ ebs.url }`,
    timeout: 10000
  });

  return {
    state,
    store: new Root(request, state)
  };
};
