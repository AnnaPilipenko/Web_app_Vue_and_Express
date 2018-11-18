import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: 'hhtp://localhost:8081'
    });
};
