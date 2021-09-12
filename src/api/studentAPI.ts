import axiosClient from "./axiosClient";

const studentAPI = {
    getAll(){
        const url = '/students';
        return axiosClient.get(url);
    },
};

export default studentAPI;