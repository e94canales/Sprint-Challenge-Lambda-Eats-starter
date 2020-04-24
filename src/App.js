import React from "react";
import { Route, Switch, Link } from 'react-router-dom'
import PizzaForm from '../src/components/PizzaForm'

const App = () => {
  return (
    <div className="App">
      <nav>
        <h1>Lambda Eats</h1>
        <ul>
          <li><Route path='/'><Link to='/'>Home</Link></Route></li>
          <li><Route path='/'><Link to='/pizza'>Pizza</Link></Route></li>
        </ul>
      </nav>
      <Switch>
        <Route Route path='/pizza'>
          <PizzaForm />
        </Route>
      </Switch>
      
    </div>
  );
};
export default App;
