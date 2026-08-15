import Saludo from "./components/Saludo";
import TarjetaPerfil from "./components/Tarjetaperfil"; // Con la 'p' minúscula para que use tu archivo suelto
import Contador from "./components/Contador";
import ListaTareas from "./components/ListaTareas";

function App() {
  // Datos simulados para la tarjeta de perfil (Parte 2)
   const usuario1 = {
    nombre: "Ada Lovelace",
    rol: "Pionera de la Programación",
    foto: "https://picsum.photos/80",
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh", color: "#333" }}>
      <h1>Actividad en Clase N.º 2 — ISDeM</h1>
      <hr style={{ marginBottom: "2rem", border: "1px solid #ddd" }} />
      
      {/* Parte 1: Uso de props simple */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2>Parte 1: Componente Saludo</h2>
        <Saludo nombre="Valentina" />
        <Saludo nombre="Tomás" />
      </section>

      {/* Parte 2: Desestructuración de props */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2>Parte 2: Tarjeta de Perfil</h2>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <TarjetaPerfil nombre={usuario1.nombre} cargo={usuario1.rol} imagen={usuario1.foto} />
          <TarjetaPerfil nombre="Grace Hopper" cargo="Inventora del compilador" imagen="https://picsum.photos/80" />
        </div>
      </section>

      {/* Parte 3: Manejo de Estado Simple */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2>Parte 3: Contador Funcional</h2>
        <Contador />
      </section>

      {/* Parte 4: Estado Complejo (Arreglos) */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2>Parte 4: Lista de Tareas Inmutable</h2>
        <ListaTareas />
      </section>
    </div>
  );
}

export default App;
