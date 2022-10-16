const prueba = [
  {
    nombre: 'Alejandro Giammattei',
    puesto: 'Presidente de la republica',
  },
  {
    nombre: 'Guillermo Castillo',
    puesto: 'Visepresidente de la republica',
  },
];

export default function People() {
  return (
    <div>
      <h1>People</h1>
      <table className='table'>
        <thead>
          <tr>
            <td>
              <h5>Nombre</h5>
            </td>
            <td>
              <h5>Puesto</h5>
            </td>
          </tr>
        </thead>
        <tbody>
          {prueba.map((val, key) => {
            return (
              <tr>
                <td>{val.nombre}</td>
                <td>{val.puesto}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
