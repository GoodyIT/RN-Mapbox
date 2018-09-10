import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import { set } from 'lodash';
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from './reducers';

const client = axios.create({
  baseURL: 'http://142.93.37.114/api/v1',
  timeout: 10000,
});
const options = {
  interceptors: {
    request: [
      ({ getState, config }, req) => {
        const newConfig = { ...req };
        const { token } = getState().auth;
        if (token) set(newConfig, 'headers.Authorization', `Bearer ${token}`);
        return newConfig;
      },
    ],
    response: [(getState, response) => response],
  },
};

const store = createStore(rootReducer, applyMiddleware(axiosMiddleware(client, options)));
export default store;
