import './App.css';
import React from 'react';
//import Header from './components/Header';
import Navbar from './components/Navbar';
import Input from './components/Input';
import Lists from './components/Lists';
import Landing from './components/Landing';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [product, setProduct] = React.useState([]);

  const deleteProduct = (item) => {
    //console.log("I am removing" + item)
    setProduct(product.filter((e) => {
      return (
        e !== item
      )
    }))
  }

  return (
    <>
      <BrowserRouter>
        <Navbar product={product} />
        <Switch>
          <Route path="/input">
            <Input setProduct={setProduct} product={product} />
          </Route>
          <Route path="/lists">
            <Lists product={product} deleteProduct={deleteProduct} />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
