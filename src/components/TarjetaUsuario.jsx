function TarjetaUsuario({ usuario }) {
  const { name, email, company, phone } = usuario;

  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "15px",
      marginBottom: "15px",
      backgroundColor: "#ffffff",
      boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
      color: "#333",
      fontFamily: "sans-serif"
    }}>
      <h3 style={{ margin: "0 0 8px 0", color: "#113153" }}>{name}</h3>
      <p style={{ margin: "4px 0" }}>📧 <strong>Email:</strong> {email}</p>
      <p style={{ margin: "4px 0" }}>🏢 <strong>Compañía:</strong> {company.name}</p>
      <p style={{ margin: "4px 0" }}>📞 <strong>Teléfono:</strong> {phone}</p>
    </div>
  );
}

export default TarjetaUsuario;
