import styles from "./TarjetaPerfil.module.css";

function TarjetaPerfil({ nombre, rol, activo }) {
  // 1) Inicial del nombre en mayúscula
  const inicial = nombre.charAt(0).toUpperCase();

  // 2) Estilos en línea para el estado activo/inactivo
  const estiloEstado = {
    color: activo ? 'green' : 'red',
    fontWeight: 'bold'
  };

  return (
    <div className={styles.tarjeta}>
      <h2>{inicial + " — " + nombre}</h2>
      <p>Rol: {rol}</p>
      <p style={estiloEstado}>
        Estado: {activo ? 'Activo' : 'Inactivo'}
      </p>
      <button className={styles.boton} onClick={() => alert('Hola, ' + nombre)}>
        Saludar
      </button>
    </div>
  );
}

export default TarjetaPerfil;
