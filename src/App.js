import Finesell from './component/Finesell';
import Product from './component/Product';
import Text from './component/Text';
import Achete from './component/achete';
import './component/ecomerce.css'
import Header from './component/header';
import { BrowserRouter , Route, Routes,} from 'react-router-dom';
import img2 from './component/assets/headphones_a_4.webp'
import img3 from './component/assets/headphones_c_2.webp'
import img4 from './component/assets/speaker1.webp'
import img5 from './component/assets/watch_1.webp'
import img6 from './component/assets/watch_2.webp'
import img7 from './component/assets/watch_3.webp'
import img8 from './component/assets/headphones_b_2.webp'
import img9 from './component/assets/headphones_c_1.webp'
import img10 from './component/assets/PC.png'

function App() {
  
  const product = [{
    nameimg:img2,
    nameproduct: "boAt Party Pal 50",
    prix:'$70'
    
   },
   {
     nameimg:img3,
     nameproduct: "boAt Party Pal 50",
     prix:'$19'
    },
    {
     nameimg:img4,
     nameproduct: "boAt Party Pal 50",
     prix:"$45"
    },
    {
     nameimg:img5,
     nameproduct: "boAt Party Pal 50",
     prix:'22$'
    },
    {
     nameimg:img6,
     nameproduct: "boAt Party Pal 50",
     prix:'$30'
    },
    {
     nameimg:img7,
     nameproduct: "boAt Party Pal 50",
     prix:'$60'
    },
    {
     nameimg:img8,
     nameproduct: "boAt Party Pal 50",
     prix:'$50'
    },
    {
     nameimg:img9,
     nameproduct: "boAt Party Pal 50",
     prix:'$40'
    },
    
    ]

  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element = {<><Header> </Header>
                                   <Text></Text>
                                   <Product product = {product}></Product>
                                   <Finesell></Finesell>
</>
      }></Route>



<Route path='/:id' element = {<Achete product = {product}></Achete>}></Route>
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
 // <BrowserRouter>
    // <Routes>
    // <Route path='/' element={<Product/>}/>
    //   <Route path='/smai' element={<Header/>}/>
    //   <Route path='/smai/:id' element={<Achete/>}/>
    //   <Route path='*' component={Achete}/>
    // </Routes>
    // </BrowserRouter>