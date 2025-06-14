import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import GoogleSuccess from './pages/GoogleSuccess';
import Home from './pages/Home';
import RutaPrivada from './components/RutaPrivada';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/google-success" element={<GoogleSuccess />} />
        
        {/* RUTA PROTEGIDA */}
        <Route 
          path="/home" 
          element={
            <RutaPrivada>
              <Home />
            </RutaPrivada>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
