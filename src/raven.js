import Raven from 'raven-js';

Raven.config(process.env.RAVEN).install();

export default Raven;
