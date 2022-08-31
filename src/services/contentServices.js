import axios from 'axios';
// const responseLoadData = require('./responseLoadData.json');
// const responseLoadTotalData = require('./responseLoadTotalData.json');

export const getData = () => // responseLoadData;
  axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api`);

export const getTotalData = () => // responseLoadTotalData;
  axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api-total`);
  