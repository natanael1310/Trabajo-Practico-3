function Encabezado({ titulo, totalComisiones, totalDisponibles }) {
  return (
    <header style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
      <h1>{titulo}</h1>
      <p>Total de comisiones: <strong>{totalComisiones}</strong> | Disponibles para inscripción: <strong>{totalDisponibles}</strong></p>
    </header>
  );
}

export default Encabezado;
