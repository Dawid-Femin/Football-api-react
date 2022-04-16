import React, { useState } from 'react';
import '../style/Content.css';

//Components
import Leagues from './Leagues';
import Standings from './Standings';

const Content = () => {

  const [active, setActive] = useState(true);

  return (
    <div className='contentWrapper'>
        <div className='changeTabs'>
            <div className='leagueTab' onClick={() => setActive(true)}>
                <h2 style={{color: active ? '#13c1a3' : null}}>Leagues</h2>
            </div>
            <div className='standingsTab' onClick={() => setActive(false)}>
                <h2 style={{color: !active ? '#13c1a3' : null}}>Standings</h2>
            </div>
        </div>
        {active ? <Leagues/> : <Standings/>}
    </div>
  )
}

export default Content;