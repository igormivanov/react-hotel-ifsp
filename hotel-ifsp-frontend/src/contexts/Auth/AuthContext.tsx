import { ReactNode, createContext, useState, useEffect } from 'react';
import { User } from "../../types/User";
import { useNavigate} from 'react-router-dom';
import { authService } from '../../service/authService';

// interface RegisterData {
//   fullName: string,
//   email: string,
//   password: string,
//   cpf: string,
// }

interface AuthContextType {
  user: User | null,
  signIn: (email: string, password: string) => Promise<boolean>,
  signOut: () => void,
  registerUser: (fullName: string, email: string, password: string, cpf: string) => void,
}

export const AuthContext = createContext<AuthContextType>(null!)

interface AuthContextProviderProps {
  children: ReactNode;
}

export function AuthContextProvider({ children } : AuthContextProviderProps){

  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null)
  const api = authService();
  
  useEffect(() => {
    validateToken();
  }, []);

  const validateToken = async () => {
    try {
      const storageData = localStorage.getItem('authToken');
      if (storageData) {
          const data = await api.validateToken(storageData); 
          if (data) {
            setUser(data);
          } else {
            setUser(null);
            return navigate("/login");
          } 
      }
    } catch (error) {
      console.error('Erro na validação do token:', error);
    }
  }

  const signIn = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    if(data.user && data.token){
      setUser(data.user);
      setToken(data.token);
      return true;
    }
    return false;
  }

  const registerUser = async (fullName: string, cpf: string, email: string, password: string) => {
    await api.register(fullName, cpf, email, password);
  }

  async function signOut(){
    setUser(null);
    localStorage.removeItem('authToken');
  }

  const setToken = (token: string) => {
    localStorage.setItem('authToken', token);
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user,
      registerUser,
    }}>
      {children}
    </AuthContext.Provider>
  )  
}