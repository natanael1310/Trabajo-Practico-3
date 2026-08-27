import Etiqueta from "./Etiqueta";

function TarjetaComision({ comision, onInscribir }) {
  const { id, nombre, profe, cupo, inscriptos, turno, nivel } = comision;
  
  const estaLleno = inscriptos >= cupo;
  const lugaresRestantes = cupo - inscriptos;
  const mostrarUltimosLugares = lugaresRestantes > 0 && lugaresRestantes <= 3;

  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: "20px",
      marginBottom: "15px",
      backgroundColor: estaLleno ? "#ffebee" : "#ffffff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "#333",
      fontFamily: "sans-serif"
    }}>
      <div>
        <h3 style={{ margin: "0 0 8px 0" }}>{nombre}</h3>
        <p style={{ margin: "4px 0" }}>Profesor: <strong>{profe}</strong></p>
        
        <div style={{ margin: "10px 0" }}>
          <Etiqueta texto={turno} tipo="turno" />
          <Etiqueta texto={nivel} tipo="nivel" />
        </div>

        <p style={{ margin: "6px 0", fontWeight: "bold" }}>
          {estaLleno ? "Sin cupo" : `Quedan ${lugaresRestantes} lugares`}
        </p>

        {mostrarUltimosLugares && (
          <p style={{ margin: "4px 0", color: "#d32f2f", fontWeight: "bold" }}>
            ⚠️ ¡Últimos lugares! ({lugaresRestantes})
          </p>
        )}
      </div>

      <button
        onClick={() => onInscribir(id)}
        disabled={estaLleno}
        style={{
          padding: "10px 18px",
          backgroundColor: estaLleno ? "#9e9e9e" : "#28a745",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: estaLleno ? "not-allowed" : "pointer",
          fontWeight: "bold"
        }}
      >
        Inscribirme
      </button>
    </div>
  );
}

export default TarjetaComision;
