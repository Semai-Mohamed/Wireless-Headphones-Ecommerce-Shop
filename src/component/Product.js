/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
function Product(props) {
      const divproduct = props.product.map((pro,index) => (
      <Link to={`/product${index}`} className='product' id={index} key={index}>
     <div className='productimg' ><img src={pro.nameimg} alt=''></img></div>  
       <div className='producttext'>{pro.nameproduct}</div>
       <div className='productprix'>{pro.prix}</div>
       </Link>   
       ) )
  return (
    <div className='products'>
   
   {divproduct}
   </div>
    
  )
}

export default Product



