import axios from 'axios';

const instance = axios.create({ baseURL: "http://localhost:3000/users" });

const getUsers = () => instance.get('/');

export const api = { getUsers };
