import logo from './logo.svg';
import './App.css';
import Banner from './Component/Banner/Banner';
import Newproducts from './Component/Newproducts/Newproducts';
import Featuredproducts from './Component/Featuredproducts/Featuredproducts';
import Sportswear from './Component/Featuredproducts/Sportswear';
import Clientpage from './Component/Clientpage/Clientpage';
// import Cardswipe from './Component/Cardswipe/Cardswipe';
import Footer from './Component/Footer/Footer';
import Menubar from './Component/Menubar/Menubar';
import Individualdress from './Component/Individualdress/Individualdress';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Relatedproducts from './Component/Relatedproducts/Relatedproducts';
import Otherproducts from './Component/Relatedproducts/Otherproducts';
import Cardswipe from './Component/Cardswipe/Cardswipe';

function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={[ <Menubar/>,<Banner/>,<Newproducts/>,<Sportswear/>,<Featuredproducts/>,<Clientpage/>,<Cardswipe/>,<Footer/>]}/>
    <Route path='/ind' element={[<Menubar/>,<Individualdress/>,<Relatedproducts/>,<Otherproducts/>,<Footer/>]}/>
   </Routes>
   </BrowserRouter> 
 
  
 
    

     {/* <Cardswipe/> */}
   
    
    </div>
  );
}

export default App;
