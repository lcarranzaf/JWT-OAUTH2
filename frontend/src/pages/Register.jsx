import { useState } from 'react';
import { register } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    telefono: ''
  });

  const [errores, setErrores] = useState({});
  const [errorServidor, setErrorServidor] = useState('');
  const navigate = useNavigate();

  const validar = () => {
    const errores = {};
    if (!datos.nombre.trim()) errores.nombre = 'El nombre es obligatorio';
    if (!datos.apellido.trim()) errores.apellido = 'El apellido es obligatorio';

    if (!datos.email) {
      errores.email = 'El correo es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(datos.email)) {
      errores.email = 'Correo no válido';
    }

    if (!datos.password) {
      errores.password = 'La contraseña es obligatoria';
    } else if (datos.password.length < 6) {
      errores.password = 'Debe tener al menos 6 caracteres';
    }

    if (!datos.telefono.trim()) {
      errores.telefono = 'El teléfono es obligatorio';
    } else if (!/^\d{7,15}$/.test(datos.telefono)) {
      errores.telefono = 'Teléfono no válido';
    }

    return errores;
  };

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const erroresValidados = validar();
    if (Object.keys(erroresValidados).length > 0) {
      setErrores(erroresValidados);
      return;
    }

    try {
      await register(datos);
      navigate('/login');
    } catch (err) {
      setErrorServidor(err.response?.data?.msg || 'Error al registrar');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Crear Cuenta</h2>

        {errorServidor && <p className="text-red-600 mb-4">{errorServidor}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={datos.nombre}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
            {errores.nombre && <p className="text-red-600 text-sm">{errores.nombre}</p>}
          </div>

          <div>
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={datos.apellido}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
            {errores.apellido && <p className="text-red-600 text-sm">{errores.apellido}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={datos.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
            {errores.email && <p className="text-red-600 text-sm">{errores.email}</p>}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={datos.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
            {errores.password && <p className="text-red-600 text-sm">{errores.password}</p>}
          </div>

          <div>
            <input
              type="text"
              name="telefono"
              placeholder="Teléfono"
              value={datos.telefono}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
            {errores.telefono && <p className="text-red-600 text-sm">{errores.telefono}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Registrarse
          </button>
        </form>

        <p className="mt-4 text-center">
          ¿Ya tienes cuenta?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
