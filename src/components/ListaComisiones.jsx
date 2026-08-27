import TarjetaComision from "./TarjetaComision";

function ListaComisiones({ comisiones, onInscribir }) {
  // Punto 4.4: Recibe el arreglo ya filtrado y lo recorre con .map() devolviendo una <TarjetaComision>
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      {comisiones.map((comision) => (
        <TarjetaComision
          key={comision.id}
          comision={comision}
          onInscribir={onInscribir}
        />
      ))}
    </div>
  );
}

export default ListaComisiones;
