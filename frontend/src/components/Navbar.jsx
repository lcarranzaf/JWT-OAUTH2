import { useState, useContext } from 'react';
import { Menu, X } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { usuario, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="text-center text-sm bg-gray-800 py-1">
        Envío gratis en compras mayores a $50.000
      </div>

      <div className="px-6 py-4 max-w-7xl mx-auto">
        {/* Contenedor principal con espacio entre izquierda y derecha */}
        <div className="flex justify-between items-center w-full">
          {/* IZQUIERDA: Logo + Links */}
          <div className="flex items-center gap-6">
            <div className="font-bold text-xl">TechStore</div>

            <nav className="hidden md:flex gap-4">
              <a href="#" className="hover:underline">Inicio</a>
              <a href="#" className="hover:underline">Smartphones</a>
              <a href="#" className="hover:underline">Laptops</a>
              <a href="#" className="hover:underline">Audio</a>
              <a href="#" className="hover:underline">Gaming</a>
              <a href="#" className="hover:underline">Ofertas</a>
            </nav>
          </div>

          {/* DERECHA: Usuario + Carrito + Cerrar sesión */}
          <div className="hidden md:flex items-center gap-4">
            <button className="relative">
              <span>🛒</span>
              <span className="absolute top-0 right-0 bg-red-600 text-xs rounded-full px-1">3</span>
            </button>
            {usuario ? (
              <>
                <span className="font-semibold">👤 {usuario.nombre}</span>
                <button
                  onClick={handleLogout}
                  className="text-sm bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <span>Cuenta</span>
            )}
          </div>

          {/* ÍCONO MENÚ (mobile) */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MENÚ MOBILE */}
      {open && (
        <div className="md:hidden bg-gray-800 px-6 py-4 flex flex-col gap-3">
          <a href="#" className="hover:underline">Inicio</a>
          <a href="#" className="hover:underline">Smartphones</a>
          <a href="#" className="hover:underline">Laptops</a>
          <a href="#" className="hover:underline">Audio</a>
          <a href="#" className="hover:underline">Gaming</a>
          <a href="#" className="hover:underline">Ofertas</a>
          <hr className="border-gray-600" />
          <span>Favoritos</span>
          {usuario ? (
            <>
              <span className="font-semibold">👤 {usuario.nombre}</span>
              <button
                onClick={handleLogout}
                className="text-sm bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md mt-2 w-fit"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <span>Cuenta</span>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
