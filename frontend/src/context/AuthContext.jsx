import { createContext, useState, useEffect } from 'react';
import { getProfile } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const verificarSesion = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await getProfile(token);
          setUsuario(res.user);
        } catch (error) {
          console.error('Token inválido o expirado');
          localStorage.removeItem('token');
        }
      }
      setCargando(false);
    };
    verificarSesion();
  }, []);

  const login = (data) => {
    localStorage.setItem('token', data.token);
    setUsuario(data.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout, cargando }}>
      {children}
    </AuthContext.Provider>
  );
};
