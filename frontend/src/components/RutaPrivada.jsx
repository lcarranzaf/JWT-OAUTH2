
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const RutaPrivada = ({ children }) => {
  const { usuario, cargando } = useContext(AuthContext);

  if (cargando) return <p className="text-center py-10">Cargando...</p>;

  return usuario ? children : <Navigate to="/login" />;
};

export default RutaPrivada;
