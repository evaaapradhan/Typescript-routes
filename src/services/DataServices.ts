import { mockdata } from "../mock/DataMock";
import { datas } from "../contracts/Data";
export const findAll = () => {
  return Promise.resolve(mockdata);
};

export const findByID = (id: number) => {
  const item = mockdata.find((item) => item.id == id);
  if (item) {
    return Promise.resolve(item);
  }
  return Promise.reject();
};
export const datapost = (item: datas) => {
  mockdata.push(item);
  return Promise.resolve(mockdata);
};

export const deletedata = (todeleteid: number) => {
  const deleteD = mockdata.filter((data) => data.id !== todeleteid);
  // data --> array's every element, can give any variable
  return Promise.resolve(deleteD);
};

export const updatedata = (enterid: number, forupdate: datas) => {
  const ind = mockdata.findIndex((element) => element.id == enterid);  //element in new array 
  mockdata[ind].name = forupdate.name;
  mockdata[ind].phone = forupdate.phone;
  mockdata[ind].email=forupdate.email;
  mockdata[ind].address = forupdate.address;
  mockdata[ind].country = forupdate.country;
  return Promise.resolve(mockdata);
};
