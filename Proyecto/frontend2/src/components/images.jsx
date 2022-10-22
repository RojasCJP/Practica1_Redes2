import React, { useEffect, useState } from 'react';

export default function Images() {
  const [archivoPublico, setArchivoPublico] = useState([]);
  const hola = async () => {
    const respuest = await getData();

    setArchivoPublico(respuest.imagenes);
  };

  useEffect(() => {
    hola();
  }, []);
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
          {archivoPublico.map((val, key) => {
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

const getData = () => {
  return fetch(`http://localhost:5000/allImages`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res;
    });
};
