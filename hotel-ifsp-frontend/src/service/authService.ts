import { api } from "../lib/axios";

export const authService = () => ({
  validateToken: async (token: string) => {
    try {
      const response = await api.post('/auth/validate-token', { token });
      return response.data;
    } catch (error) {
      console.log(error)
    }
  },
  signin: async (email: string, password: string) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw error;
    }
  },
  register: async (fullName: string, cpf: string, email: string, password: string) => {
    const response = await api.post('/auth/register', {fullName, cpf, email, password, });
    return response.data;
  }

})