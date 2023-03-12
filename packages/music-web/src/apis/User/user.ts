import { User } from '@/store/user';
import axiosInstance, { IResponse } from '..';
import { ILogin, IRegister, IUpdate } from './index.interface';

export const loginApi = async (params: ILogin): Promise<IResponse<any>> => {
  return axiosInstance.post('auth/login', params).then((res) => res.data);
};

export const registerApi = async (
  params: IRegister
): Promise<IResponse<any>> => {
  return axiosInstance.post('auth/register', params).then((res) => res.data);
};

export const getUserInfoApi = async (): Promise<IResponse<User>> => {
  return axiosInstance.get('auth/getUserInfo').then((res) => res.data);
};

export const updateUserInfoApi = async (
  params: IUpdate
): Promise<IResponse<User>> => {
  return axiosInstance
    .post('auth/updateUserInfo', params)
    .then((res) => res.data);
};
