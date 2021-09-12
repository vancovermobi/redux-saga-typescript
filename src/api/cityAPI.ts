import { City } from './../models/city';
import { ListResponse } from "models";
import axiosClient from "./axiosClient";

const cityAPI = {
    getAll(): Promise<ListResponse<City>>{
        const url = '/cities';
        return axiosClient.get(url,{
            params:{
                _page: 1,
                _limit: 10,
            },
        });
    },
};
 export default cityAPI;