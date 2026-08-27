function Filtros({ turnoActivo, onCambiarTurno }) {
  const turnos = ["todos", "mañana", "tarde", "noche"];

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
      {turnos.map((turno) => (
        <button
          key={turno}
          onClick={() => onCambiarTurno(turno)}
          style={{
            padding: "8px 16px",
            textTransform: "capitalize",
            backgroundColor: turnoActivo === turno ? "#46709e" : "#f5a5a5",
            color: turnoActivo === turno ? "white" : "#333",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          {turno}
        </button>
      ))}
    </div>
  );
}

export default Filtros;
