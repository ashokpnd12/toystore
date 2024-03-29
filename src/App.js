import React,{Component} from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';

class App extends Component{
  render(){
  return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={ProductList}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/details' component={Details}/>
          <Route component={Default}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;