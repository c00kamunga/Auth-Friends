import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.GetItem('token');
    return axios.create({
        headers: {
            Authorization: token,
        },
    });
};