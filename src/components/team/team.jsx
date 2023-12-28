import React from 'react'
import chair from '../../images/chairperson.png'
import ceo from '../../images/CEO.png'
import coo from '../../images/COO.png'

import './team.css'

const Team = () => {
  return (
    <div>
        <div className='members'>
            <h1>Our Leaders</h1>
            <p>Mr. Fabiani is actively engaged in technology, commercial real estate, finance, and trading. He is also recognized for his advisory role in corporate governance and transparency for numerous companies.
</p>
            <div className='chair'>
                <div className='profile'>
                    <img src={chair} alt="" />
                    <h3>Harish Fabiani</h3>
                    <span>Chai person</span>
                </div>
                <div className='profile'>
                    <img src={ceo} alt="" />
                    <h3>Salai Kumaran</h3>
                    <span>CEO</span>
                </div>
                <div className='profile'>
                    <img src={coo} alt="" />
                    <h3>Rishi Choudhary</h3>
                    <span>COO</span>
                </div>
                
                
            </div>
            
        </div>
    


      
    </div>
  )
}

export default Team
