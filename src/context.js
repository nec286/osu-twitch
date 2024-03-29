import axios from 'axios';
import config from 'config';
import Root from 'stores/Root';

export default (state) => {
  const { ebs } = config();

  const request = axios.create({
    baseURL: `${ ebs.url }`,
    timeout: 10000,
    params: { key: ebs.projectKey }
  });

  return {
    state,
    store: new Root(request, state)
  };
};
