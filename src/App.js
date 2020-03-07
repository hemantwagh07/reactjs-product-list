import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import './App.css';
import Product from './Components/Product';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div>
      <Router>
     <Switch>
       <Route exact path='/' component={Product} />   
       <Route path='/product/:id' component={ProductDetails} /> 
     </Switch>  
    </Router>
    </div>
  );
}

export default App;
