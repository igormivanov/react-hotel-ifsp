import { AuthContext } from "../contexts/Auth/AuthContext";
import { useContext } from 'react';

export function useAuth(){
  const context = useContext(AuthContext);
  return context;
} 