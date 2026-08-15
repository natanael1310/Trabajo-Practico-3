import { useState } from 'react';

function Contador() {
  const [conteo, setConteo] = useState(0);

  // 1) Completado usando la forma funcional exigida en la pista
  const incrementar = () => setConteo(prev => prev + 1);
  const decrementar = () => setConteo(prev => prev - 1);
  const reiniciar = () => setConteo(0);

  return (
    <div style={{ padding: '10px', border: '1px solid #f48181', margin: '10px 0' }}>
      <p>Valor actual: {conteo}</p>
      <button onClick={incrementar}>+1</button>
      <button onClick={decrementar}>-1</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
}

export default Contador;
