import axios, { AxiosResponse } from 'axios';

export type LoginInput = {
  login: string;
  password: string;
};

export type RegistrationInput = {
  name: string;
  password: string;
};

export type RegistrationOutput = {
  id: string;
  token: string;
  name: string;
  password: string;
};

export const getUsers = async (): Promise<unknown> => {
  try {
    const res = await axios.get<
      {
        id: string;
        name: string;
        password: string;
      }[]
    >('http://localhost:3001/api/users');
    return res;
  } catch (e) {
    return new Error('cant get users');
  }
};

export const login = async (
  loginIput: LoginInput
): Promise<{ isLoggedIn: boolean }> => {
  try {
    const res: AxiosResponse = await axios.post(
      'http://localhost:3001/api/auth/login',
      loginIput
    );
    return res.data as { isLoggedIn: boolean };
  } catch (e) {
    throw new Error('cannot login');
  }
};

export const registration = async (
  registrationInput: RegistrationInput
): Promise<RegistrationOutput> => {
  try {
    const res: AxiosResponse = await axios.post(
      'http://localhost:3001/api/auth/registration',
      registrationInput
    );
    return res.data as RegistrationOutput;
  } catch (e) {
    throw new Error('cannot register');
  }
};
