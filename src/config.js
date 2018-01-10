export default function() {
  return {
    ebs: {
      url: process.env.URL,
      projectKey: process.env.PROJECT_KEY
    },
    bucket: process.env.BUCKET
  }
}
