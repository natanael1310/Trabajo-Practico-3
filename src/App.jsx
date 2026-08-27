import { useState, useEffect } from "react";
import axios from "axios";
import TarjetaUsuario from "./components/TarjetaUsuario";

function App() {
  // 2. Estados de la petición: datos (éxito), cargando y error
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // 1. Uso de useEffect para hacer la petición al montar el componente
  useEffect(() => {
    // 3. Leer la URL base de la API desde la variable de entorno (.env)
    const urlApi = import.meta.env.VITE_API_URL;

    axios.get(urlApi)
      .then((respuesta) => {
        // Estado Éxito: guardamos los datos reales y apagamos el cargando
        setUsuarios(respuesta.data);
        setCargando(false);
      })
      .catch((errorPeticion) => {
        // Estado Error: guardamos el mensaje si la petición falla
        setError("No se pudieron cargar los datos de la API externa.");
        setCargando(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "30px" }}>
        Trabajo Práctico N.º 3 — Usuarios de la API
      </h1>

      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        {/* 2. Modelar y mostrar en pantalla los tres estados de la petición */}
        
        {/* ESTADO 1: CARGANDO */}
        {cargando && (
          <div style={{ textAlign: "center", padding: "20px", fontWeight: "bold", color: "#007bff" }}>
            ⏳ Cargando datos reales desde la API externa...
          </div>
        )}

        {/* ESTADO 2: ERROR */}
        {error && (
          <div style={{ backgroundColor: "#f8d7da", color: "#721c24", padding: "15px", borderRadius: "5px", textAlign: "center", fontWeight: "bold" }}>
            ❌ {error}
          </div>
        )}

        {/* ESTADO 3: ÉXITO (Muestra la colección de usuarios reales de la API) */}
        {!cargando && !error && usuarios.map((usuario) => (
          <TarjetaUsuario key={usuario.id} usuario={usuario} />
        ))}
      </div>
    </div>
  );
}

export default App;
