export default function() {
  switch(process.env.NODE_ENV) {
  case 'production':
    return {
      ebs: {
        url: process.env.URL,
        projectKey: process.env.PROJECT_KEY
      }
    };
  default:
    return {
      ebs: {
        url: 'https://10.1.1.183:81',
        projectKey: ''
      }
    };
  }
}
