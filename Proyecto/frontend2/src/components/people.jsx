import React, { useEffect, useState } from 'react';

export default function People() {
  const [archivoPublico, setArchivoPublico] = useState([]);
  const hola = async () => {
    const respuest = await getData();
    console.log(respuest);
    setArchivoPublico(respuest.personas);
  };

  useEffect(() => {
    hola();
  }, []);
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
          {archivoPublico.map((val, key) => {
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

const getData = () => {
  return fetch(`https://backend.funcionpublica.online:5000/allPeople`, {
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
