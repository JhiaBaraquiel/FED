import axios from 'axios';

const API_URL = 'http://localhost:8080/orders';
export const getOrder = async () => {
    return await axios.get(API_URL);
}