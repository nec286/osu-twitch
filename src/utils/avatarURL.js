import config from 'config';

export default function(osuUsername) {
  return `${config().bucket}/avatars/${osuUsername.toLowerCase()}`;
}
