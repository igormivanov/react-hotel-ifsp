import { useEffect, useState} from 'react';
import { Navigate, } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';

interface RequireAuthProps{
  children: JSX.Element;
}

export function RequireAuth({ children }: RequireAuthProps){
  const { user } = useAuth()
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    if (user) {
      setUserLoaded(true);
    }
  }, [user]);

  const storageData = localStorage.getItem('authToken');
  if(!storageData){
    return <Navigate to="/login"/>
  }

  if (!userLoaded) {
    return null;
  }

  if (!user) {
    return <Navigate to="/login"/>
  }
  return children
  
}