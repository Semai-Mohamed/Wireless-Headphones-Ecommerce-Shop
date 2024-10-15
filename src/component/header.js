import React from 'react'
import img1 from './assets/headphones_a_1.webp'
function Header() {
  return (
    <div className='header'>
<div className='small'>Best solo</div>
<div className='big'>Wireless</div>
<div className='xbig'>HEADPHONE</div>
<div className='main'>
<div  className='shop'>
shop Wireless headphone
</div>
<div className='des'>
<div>Description</div>
the game begin here with immortall 100d gaming headphone don't just play the game -feel it live it and own it Level up yout audio game with 7.1 Channel
</div>
</div>

    <img src={img1} alt='dddd' className='mainimg'></img>

    </div>
  )
}

export default Header