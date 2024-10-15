import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Achete(props) {
 const params = useParams().id
 const products = props.product
 const foundProduct = products.find(
  (product) => products.indexOf(product) === Number(params.replace(/\D/g, ''))
);
const [count,setcount] = useState(1)
const clickhandler1 = ()=>{
if(count >0){
  setcount(count => count - 1)
}
}
const clickhandler2 = ()=>{
  if(count <10){
    setcount(count => count + 1)
  }
}
useEffect(() => {
  const images = document.querySelectorAll('.iamge_achete');

const clickhandler3 = (image)=>{
  images.forEach(image => {image.classList.remove('addcolor')})
image.classList.add('addcolor')
}

  images.forEach((image)=>{
   
    image.addEventListener('click',  ()=>clickhandler3(image)   )
  })
 return(()=>{
  images.forEach(image=>{image.removeEventListener('click',()=>clickhandler3(image))})
 })
}, );
  return (
    <div className='achete'>
    <div  >
    <div className='mainimages'> 
      <div className='main_img_achete'>
        <img src={foundProduct.nameimg} alt="" />
      </div>
      <div className='iamges_achete'>
      <div className='iamge_achete' ><img src={foundProduct.nameimg} alt="" /></div>
      <div className='iamge_achete'><img src={foundProduct.nameimg} alt="" /></div>
      <div className='iamge_achete'><img src={foundProduct.nameimg} alt="" /></div>
      <div className='iamge_achete'><img src={foundProduct.nameimg} alt="" /></div>
      </div>
    </div>
    <div className='des_achete'>
      <div className='main_achete_text'>{foundProduct.nameproduct}</div>
      <div className='evaluation_achete'></div>
      <div className='details_title_achete'>Details</div>
      <div className='details_achete'>Un casque audio est un accessoire audio personnel conçu pour être porté sur la tête de l'utilisateur. Il se compose généralement de deux écouteurs connectés par un arceau ou une bande ajustable qui passe au-dessus de la tête. Les écouteurs sont placés sur ou autour des oreilles de l'utilisateur pour fournir une expérience sonore immersive et privée.Les caractéristiques communes d'un casque audio incluent des transducteurs (haut-parleurs) intégrés dans chaque écouteur pour produire le son, des coussinets ou des embouts d'oreille pour améliorer le confort, et un câble ou une connexion sans fil pour se connecter à une source audio telle qu'un lecteur de musique, un smartphone, un ordinateur ou une console de jeu. Certains casques sont également dotés de fonctionnalités avancées telles que la suppression du bruit, qui réduit les bruits ambiants indésirables  .</div>
      <div className='prix_achete'>{foundProduct.prix}</div>
      <div className='quantite_achete'>
        <div className='achete-' onClick={clickhandler1}>-</div>
        <div className='achete_number'>{count}</div>
        <div className='achete+' onClick={clickhandler2}>+</div>
      </div>
      <div className='buy_achete'>
        <div className='add_achete'>Add to cart</div>
        <div className='buy_now_achete'>Buy now</div>
      </div>
    </div>  
    </div>  
    </div>
  )
}

export default Achete