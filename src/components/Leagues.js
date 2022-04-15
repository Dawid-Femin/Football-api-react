import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../style/Leagues.css';

const Leagues = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios('https://api-football-standings.azharimm.site/leagues')
    .then(response => {
      console.log(response.data.data)
      setData(response.data.data)
    })
  },[]);

  return (
    <div className='leaguesWrapper'>
        {data.map((data) => (
          <div key={data.id} className='leaugeDiv'>
            <img src={data.logos.light} alt='club'/>
            <h3>{data.name}</h3>
          </div>
        ))}
    </div>
  )
}

export default Leagues;