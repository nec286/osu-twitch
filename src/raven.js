import Raven from 'raven-js';

Raven.config('https://da888c2918f84ee7ba9a65ac0bcacc01@sentry.io/257087').install();

export default Raven;
