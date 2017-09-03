const FRONTEND_DEV_URLS = ['http://localhost:3000'];

const FRONTEND_PROD_URLS =[
  'https://tkd-api.herokuapp.com/',
  'https://tkd-api.herokuapp.com/'
];

module.exports = process.env.NODE_ENV === 'production'
  ? FRONTEND_DEV_URLS
  : FRONTEND_DEV_URLS;
