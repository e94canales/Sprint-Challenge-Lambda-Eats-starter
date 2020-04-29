import React from "react";
import { Route, Switch, Link } from 'react-router-dom'
import PizzaForm from '../src/components/PizzaForm'
import Success from '../src/components/Success'
import '../src/App.css'

const App = () => {
  return (
    <div className="App">
      <nav>
        <h1>Lambda Eats</h1>
        <ul>
          <li className='home'><Route path='/'><Link to='/'>Home</Link></Route></li>
          <li><Route path='/'><Link to='/pizza'>Pizza</Link></Route></li>
        </ul>
      </nav>
      <Switch>
        <Route Route path='/pizza'>
          <PizzaForm />
        </Route>
        <Route Route path='/success'>
          <Success />
        </Route>
        <Route Route path='/'>
          <img className='pizza' alt='pizza' src='https://i.ya-webdesign.com/images/pizza-png-images-6.png'></img>
          <Link to='/pizza'><div className='order'><h4>Order Now</h4></div></Link>
        </Route>
      </Switch>
      
    </div>
  );
};
export default App;
