import React from 'react';
import PizzaBlockSkeleton from '../components/pizzaBlock/PizzaBlockSkeleton';
import { Categories } from '../components/categories/Categories';
import { Sort } from '../components/sort/Sort';
import { PizzaBlock } from '../components/pizzaBlock/PzzaBlock';
import axios from 'axios';

export const Home = () => {

    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const [categoryId, setCategoryId] = React.useState(0); //categories
    const [activeIndex, setActiveIndex] = React.useState(0); //sort

    const onClickCategory = (index) => {
      setCategoryId(index);
    }  
    const address = 'https://63b32a175901da0ab37909d9.mockapi.io/items';

    React.useEffect(() => {
      setIsLoading(true);

      async function getData(){
        if(categoryId === 0){
          await axios.get(address)
             .then(({data}) => setPizzas(data));
              setIsLoading(false);
        }else{
          await axios.get(address + `?category=${categoryId}`)
             .then(({data}) => setPizzas(data));
              setIsLoading(false);
        } 
        window.scrollTo(0, 0);      
      }
       getData();            
      }, [categoryId]);



      React.useEffect(() => {
        async function sort () {
          setIsLoading(true);
          if(activeIndex === 0) {
              
              await axios.get(address + `?sortBy=rating&order=asc`)
              .then(({data}) => setPizzas(data));
              setIsLoading(false);
          }else if(activeIndex === 1){
           
            await axios.get(address + `?sortBy=price&order=asc`)
            .then(({data}) => setPizzas(data));
                setIsLoading(false);
          }else if(activeIndex === 2){
            
            await axios.get(address + `?sortBy=title&order=asc`)
            .then(({data}) => setPizzas(data));
                setIsLoading(false);
          } 
      
          window.scrollTo(0, 0); 
        }
        sort();
      }, [activeIndex])

    return (
        <>
         <div className="content__top">
            <Categories categoryId={categoryId}
                        onClickCategory={onClickCategory}/>
            <Sort activeIndex={activeIndex}
                  onClickSort={(i) =>setActiveIndex(i)}/>
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