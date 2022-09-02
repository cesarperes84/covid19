import axios from 'axios';

export const getStats =  () => // responseLoadData;
   axios.get(`${process.env.NEXT_PUBLIC_API_URL}/stats`);

export const getDailyStats = () => // responseLoadTotalData;
  axios.get(`${process.env.NEXT_PUBLIC_API_URL}/daily-stats`);
  