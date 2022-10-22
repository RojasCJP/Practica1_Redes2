import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
export default function Graphics() {
  const [data1, setState] = useState([]);
  const hola = async () => {
    const respuest = await getData();
    // console.log(respuest);
    let auxiliarRespuesta = [['fecha', 'tipo de cambio']];
    for (let i = 0; i < respuest.bmx.series[0].datos.length; i++) {
      let fecha = i;
      let dato = parseFloat(respuest.bmx.series[0].datos[i].dato);
      const element = [fecha, dato];
      auxiliarRespuesta.push(element);
    }
    setState(auxiliarRespuesta);
  };

  useEffect(() => {
    hola();
    console.log(['fecha', 'dato'], data1);
  }, []);

  const options = {
    title: 'Quetzal vs Monedas latinoamericanas',
    hAxis: { title: 'Fecha' },
    vAxis: { title: 'Tipo de cambio' },
    legend: 'none',
  };
  return (
    <div>
      <h1>Graphics</h1>

      <Chart
        chartType='ScatterChart'
        data={data1}
        options={options}
        width='100%'
        height='500px'
        legendToggle
      />
    </div>
  );
}

const getData = () => {
  return fetch(
    `https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF57817/datos?token=c63b5b982e5559fb3b04329eed991c1ec89007eb25617032b4819bce65a5a836`,
    {
      method: 'GET',
      'Accept-Encoding': 'gzip',
      'Content-Type': 'application/json;charset=UTF-8',
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res;
    });
};
