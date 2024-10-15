import React from 'react'
import img from './assets/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp'

function Finesell() {
  return (
    <div className='sell'>
        <div className='date'>
            <div className='OFF'>20% OFF</div>
            <div className='SMILE'>FINE SMILE</div>
            <div className='NOV'>15 Nov to 7 dec</div>
        </div>
       <div className='casque'>
            <img src={img} alt="" />
            </div>
        <div className='shop2'>
            <div className='Beats'>Beats Solo Air</div>
            <div className='Summer'>Summer Sale</div>
            <div className='company'> company thats grow form 270 to 300 suuuuuuu</div>
            <div className='Now'>Shop Now</div>
        </div>
    </div>
  )
}

export default Finesell