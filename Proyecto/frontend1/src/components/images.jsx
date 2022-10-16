const prueba = [
  {
    imagen:
      'https://www.congreso.gob.gt/assets/uploads/noticias/miniaturas/4f3a4-foto2.jpg',
    nombre: 'Camara de diputados',
  },
  {
    imagen:
      'https://upload.wikimedia.org/wikipedia/commons/a/a4/Alejandro_Giammattei_%28portrait%29_%28cropped2%29.jpg',
    nombre: 'Presidente de la republica',
  },
];

export default function Images() {
  return (
    <div>
      <h1>Imagenes</h1>
      <table className='table'>
        <thead>
          <tr>
            <td>
              <h5>Nombre</h5>
            </td>
            <td>
              <h5>Imagen</h5>
            </td>
          </tr>
        </thead>
        <tbody>
          {prueba.map((val, key) => {
            return (
              <tr>
                <td>{val.nombre}</td>
                <td>
                  <div>
                    <img style={{ height: '100px' }} src={val.imagen} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
