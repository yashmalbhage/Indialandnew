import React from 'react'
import './indexs.css'
import Counter from '../counter/counter'
import abimg from '../../images/hero_2.jpg.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Aboutp = () => {
  return (
    <div>
           <div className="abo">
            <h1 style={{fontSize:'40px'}}>About us</h1>
            <hr></hr>
            <p style={{fontWeight:'700'}}>India Land, a part of the Americorp Group, has developed five million square feet of real estate, including IT parks, SEZs, and industrial and commercial spaces across major Indian cities. They hold prime land parcels in South Mumbai, Coimbatore, suburban Chennai (Padalam, Oragadam), and Pune (Hinjewadi) for high-end commercial and residential development.
</p>
            <div className="ap1">
                <div className="imagep"> 
                  <img src={abimg} alt="image" />
                </div>
                <div className="attri">

                    <div className="feature">
                    <FontAwesomeIcon icon={faNetworkWired} style={{width:'200px', marginRight:'1%'}}/>
                    <div className="contetn">
                    <h4>IT Park</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.</p>
                    </div>
                       

                    </div>
                    <div className="feature">
                    <FontAwesomeIcon icon={faCog} style={{width:'200px', marginRight:'1%'}}/>
                    <div className="contetn">
                    <h4>Industrial Park</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.</p>



                    </div>

                    </div>
                  
                    <div className="feature">
                    <FontAwesomeIcon icon={faHome} style={{width:'200px', marginRight:'1%'}}/>
                    <div className="contetn">
                    <h4>Quality properties</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.</p>


                    </div>


                    </div>


                </div>
            </div>
        </div>
        <Counter />
      
    </div>
  )
}

export default Aboutp
