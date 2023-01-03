//import pizzas from './assets/pizzas/pizzas.json';
import React, { useState, useEffect } from 'react';
import { Header } from './components/header/Header';
import { Categories } from './components/categories/Categories';
import { Sort } from './components/sort/Sort';
import { PizzaBlock } from './components/pizzaBlock/PzzaBlock';
import axios from 'axios';

import './scss/app.scss';


function App() {
  
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('https://63b32a175901da0ab37909d9.mockapi.io/items')
         .then(({data}) => setPizzas(data))
  }, []);
  return ( 
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All pizzas</h2>
          <div className="content__items">
           
           {pizzas.map(obj => <PizzaBlock key={obj.id} {...obj} />        
           )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;