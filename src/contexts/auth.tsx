/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from 'react';
import { api } from '../services/api';

type SignInCredentials = {
  email: string;
  password: string;
};

type UserData = {
  id: string;
  name: string;
  email: string;
  birthdate: string;
  gender: string;
};

type AuthState = {
  user: UserData;
  token: string;
  refreshToken: string;
};

type AuthContextState = {
  user: UserData;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@adapto:token');
    const refreshToken = localStorage.getItem('@adapto:refreshToken');
    const user = localStorage.getItem('@adapto:user');

    if (token && refreshToken && user) {
      return { token, refreshToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = async (credentials: SignInCredentials) => {
    const response = await api.post('/auth/sign-in', credentials);

    const user = response.data;
    const token = response.headers.authorization;
    const refreshToken = response.headers['refresh-token'];

    localStorage.setItem('@adapto:token', token);
    localStorage.setItem('@adapto:refreshToken', refreshToken);
    localStorage.setItem('@adapto:user', JSON.stringify(user));

    setData({ token, refreshToken, user });
  };

  const signOut = () => {
    localStorage.removeItem('@adapto:token');
    localStorage.removeItem('@adapto:refreshToken');
    localStorage.removeItem('@adapto:user');

    setData({} as AuthState);
  };

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextState => {
  const context = useContext(AuthContext);

  return context;
};
