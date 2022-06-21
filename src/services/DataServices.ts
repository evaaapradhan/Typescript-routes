import { mockdata } from "../mock/DataMock";
import {datas} from "../contracts/Data";
export const findAll = () => {
    return Promise.resolve(mockdata);
};

export const findByID = (id:number) => {
    const item = mockdata.find((item) => item.id ==id);
    if (item){
        return Promise.resolve(item);
    }
    return Promise.reject();
}
export const datapost =(item: datas) =>{
    mockdata.push(item);
    return Promise.resolve(mockdata);
}