import {useEffect} from 'react';
import './App.css';
import Header from './components/commonItems/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Individual from './components/individualSection/Individual';
import Cart from './components/cart/Cart';
import { CssBaseline } from '@material-ui/core';
import axios from 'axios'




function App() {

  useEffect(() => {
        axios.get('http://localhost:3333/db').then(data=>{
               console.log(data.data)
        })
  })

  return (
    <div className="App">
      
      <Router>
      
        <Header />

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/store" exact>
          <Individual />
        </Route>


        <Route path="/cart" exact>
          <Cart />
        </Route>

      </Router>
      <CssBaseline/>
      
    </div>
  );
}

export default App;
