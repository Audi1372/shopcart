 import './App.css';
import Navigation from "./components/navbar";

import Header from './components/header';
import Footer from './components/footer';
import CardInfo from './components/body'
 import { useState } from "react";
import items from "./items";
//  import { Col, Row, Container } from 'reactstrap';



function App() {
  //  console.log(items)
  
  const [cartCount, setCartCount] = useState([]);
  const addCart = (id) => {
    setCartCount([...cartCount, id] );
    
  };
  const removeCart = (id) => {
    var index = cartCount.indexOf(id);
    if (index !== -1) {
      cartCount.splice(index, 1);
      setCartCount([...cartCount] );
    }
  }
  
  
  return (
    <div className='App'>
        
         <Navigation cartCount={cartCount} /> 
       
           <Header />  
        
           <CardInfo
                  cardItems={items}
                  addCart={addCart}
                  removeCart={removeCart}
                  cartCount={cartCount}
        
            /> 
        <Footer />  
      
    </div> 



  )
}

export default App;
