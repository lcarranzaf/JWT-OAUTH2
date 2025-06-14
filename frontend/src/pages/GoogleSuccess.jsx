import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { getProfile } from '../services/authService';

const GoogleSuccess = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const autenticar = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');
      console.log('✅ Entrando a GoogleSuccess');
      console.log('📦 Token recibido:', token);

      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const res = await getProfile(token);
        console.log('🎉 Usuario logueado:', res.user);
        login({ token, user: res.user });

        setTimeout(() => {
          navigate('/home');
        }, 100); // ⏱️ espera breve para asegurar re-render
      } catch (error) {
        console.error('❌ Error al validar token', error);
        navigate('/login');
      }
    };

    autenticar();
  }, [login, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-gray-600">Autenticando con Google...</p>
    </div>
  );
};

export default GoogleSuccess;
