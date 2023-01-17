const sanityClient = require('@sanity/client');
const client = sanityClient({
  projectId: '04r122g9',
  dataset: 'production',
  apiVersion: '2023-01-17',
  useCdn: true,
});

export default client;
