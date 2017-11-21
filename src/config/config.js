export default function() {
  switch(process.env.NODE_ENV) {
  case 'production':
    return {
      ebs: {
        // url: 'https://osu-twitch-ebs.atami.io'
        projectKey: 'AIzaSyDIa9LWRsExVFkD4YTg_Zqij-rKfzx7q8Q'
      }
    };
  default:
    return {
      ebs: {
        url: 'https://10.1.1.183:81',
        projectKey: ''
        // url: 'https://osu-twitch-ebs.atami.io'
      }
    };
  }
}
