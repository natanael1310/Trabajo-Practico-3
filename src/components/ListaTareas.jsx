import { useState } from 'react';

function ListaTareas() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Repasar props', hecha: false },
    { id: 2, texto: 'Practicar useState', hecha: false },
  ]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() === '') return;
    const tarea = {
      id: crypto.randomUUID(),
      texto: nuevaTarea.trim(),
      hecha: false,
    };
    // 1) Completado: agregar tarea al array usando spread operator (...prev)
    setTareas((prev) => [...prev, tarea]);
    setNuevaTarea('');
  };

  const eliminarTarea = (id) => {
    // 2) Completado: quitar la tarea cuyo id coincida usando filter
    setTareas((prev) => prev.filter((t) => t.id !== id));
  };

  const alternarHecha = (id) => {
    // 3) Completado: devolver un objeto nuevo con la propiedad hecha invertida
    setTareas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, hecha: !t.hecha } : t))
    );
  };

  return (
    <div style={{ padding: '15px', border: '1px solid #c27070', borderRadius: '8px', marginTop: '20px' }}>
      <h3>Lista de Tareas</h3>
      <input
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva tarea"
        style={{ padding: '5px', marginRight: '5px' }}
      />
      <button onClick={agregarTarea}>Agregar</button>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tareas.map((tarea) => (
          <li key={tarea.id} style={{ margin: '10px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="checkbox"
              checked={tarea.hecha}
              onChange={() => alternarHecha(tarea.id)}
            />
            <span style={{ textDecoration: tarea.hecha ? 'line-through' : 'none' }}>
              {tarea.texto}
            </span>
            <button 
              onClick={() => eliminarTarea(tarea.id)} 
              style={{ backgroundColor: '#944c46', color: 'white', border: 'none', padding: '3px 8px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;
