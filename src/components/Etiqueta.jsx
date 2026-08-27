function Etiqueta({ texto, tipo }) {
  const esNivel = tipo === "nivel";
  const colorFondo = esNivel ? "#e1f5fe" : "#fff3e0";
  const colorTexto = esNivel ? "#1e5e80" : "#f1b273";

  return (
    <span style={{
      padding: "4px 8px",
      borderRadius: "4px",
      fontSize: "12px",
      fontWeight: "bold",
      backgroundColor: colorFondo,
      color: colorTexto,
      marginRight: "5px"
    }}>
      {texto}
    </span>
  );
}

export default Etiqueta;
