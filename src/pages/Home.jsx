//import React, {useState, useEffect} from 'react';
import React from 'react';
import PizzaBlockSkeleton from '../components/pizzaBlock/PizzaBlockSkeleton';
import { Categories } from '../components/categories/Categories';
import { Sort } from '../components/sort/Sort';
import { PizzaBlock } from '../components/pizzaBlock/PzzaBlock';
import axios from 'axios';

export const Home = () => {

    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState(0);

    const onClickCategory = (index) => {
      setCategoryId(index);
      
      if(index === 0) {
        axios.get('https://63b32a175901da0ab37909d9.mockapi.io/items')
           .then(({data}) => setPizzas(data));
      }else {
        axios.get('https://63b32a175901da0ab37909d9.mockapi.io/items?category='+ index)
        .then(({data}) => setPizzas(data)); 
      }
      
    }
  
    React.useEffect(() => {
    async function getData(){
      await axios.get('https://63b32a175901da0ab37909d9.mockapi.io/items')
           .then(({data}) => setPizzas(data));
            setIsLoading(false);

      window.scrollTo(0, 0);      
    }
     getData(); 
          
    }, []);

    return (
        <>
         <div className="content__top">
            <Categories categoryId={categoryId}
                        onClickCategory={onClickCategory}/>
            <Sort sortType={sortType}/>
          </div>
          <h2 className="content__title">All pizzas</h2>
          <div className="content__items">
           
           {
            isLoading ? [...new Array(6)].map((_, index) => <PizzaBlockSkeleton key={index}/>) : 
                        pizzas.map(obj => <PizzaBlock key={obj.id} {...obj}/>) 
           }
          </div>
        </>
    )
}