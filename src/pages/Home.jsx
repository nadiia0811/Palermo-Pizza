import React from 'react';
import PizzaBlockSkeleton from '../components/pizzaBlock/PizzaBlockSkeleton';
import { Categories } from '../components/categories/Categories';
import { Sort } from '../components/sort/Sort';
import { PizzaBlock } from '../components/pizzaBlock/PzzaBlock';
import axios from 'axios';

export const Home = ({searchValue}) => {

    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0); 
    const [sortType, setSortType] = React.useState({name: 'popularity', sortProp: 'rating'});

    const onClickCategory = (index) => {
      setCategoryId(index);
    } 

     const pizzasList = pizzas.map(obj => <PizzaBlock key={obj.id} {...obj}/>);
   

    /* const pizzasList = pizzas.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                             .map(obj => <PizzaBlock key={obj.id} {...obj}/>) */
    
    React.useEffect(() => {
      
       async function getData () {
        const category = (categoryId > 0 ? `category=${categoryId}` : '');
        const search = (!searchValue ? '' : categoryId === 0 ? `search=${searchValue}` : `&search=${searchValue}`);
        const sort = (search ? `&sortBy=${sortType.sortProp}` : categoryId === 0 ? `sortBy=${sortType.sortProp}` : `&sortBy=${sortType.sortProp}`);

        setIsLoading(true);
        await axios.get(`https://63b32a175901da0ab37909d9.mockapi.io/items?${category}${search}${sort}&order=asc`)
                   .then(({data}) => setPizzas(data)); 
                  
        setIsLoading(false); 
        window.scrollTo(0, 0);
      } 
  
      getData();     
      }, [categoryId, sortType, searchValue]);

    return (
        <>
         <div className="content__top">
            <Categories categoryId={ categoryId }
                        onClickCategory={ onClickCategory }/>
            <Sort value={ sortType }
                  onClickSort={ (item) => setSortType(item) } />                 
          </div>
          <h2 className="content__title">All pizzas</h2>
          <div className="content__items">
           
           {
            isLoading ? [...new Array(6)].map((_, index) => <PizzaBlockSkeleton key={index}/>) : pizzasList                                                                                   
           }
          </div>
        </>
    )
}