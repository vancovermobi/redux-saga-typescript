import axiosClient from "./axiosClient";

const cityAPI = {
    getAll(){
        const url = '/cities';
        return axiosClient.get(url);
    },
};
 export default cityAPI;