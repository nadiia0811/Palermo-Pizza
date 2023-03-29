import React from 'react';
import PizzaBlockSkeleton from '../components/pizzaBlock/PizzaBlockSkeleton';
import { Categories } from '../components/categories/Categories';
import { Sort } from '../components/sort/Sort';
import { PizzaBlock } from '../components/pizzaBlock/PzzaBlock';
import { Pagination } from '../components/pagination/Pagination';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setSortType } from '../redux/slices/filterSlice';
import { AppContext } from '../App';


export const Home = () => {
    const categoryId = useSelector(state => state.filter.categoryId);
    const sortType = useSelector(state => state.filter.sortType);  //{name:'...', sortProp: '...'}
    
    const [pizzas, setPizzas] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1)
    const [isLoading, setIsLoading] = React.useState(true);
    //const [sortType, setSortType] = React.useState({name: 'popularity', sortProp: 'rating'});
    const {searchValue} = React.useContext(AppContext);
    const dispatch = useDispatch();
    
    const onClickCategory = (index) => {
      dispatch(setCategoryId(index)) 
    } 


   /*  const onClickSort = (sortType) => {
      dispatch(setSortType(sortType))
    } */

    const pizzasList = pizzas.map(obj => <PizzaBlock key={obj.id} {...obj}/>);
    
    React.useEffect(() => {
      
       async function getData () {
        const category = (categoryId > 0 ? `category=${categoryId}` : '');
        const search = (!searchValue ? '' : categoryId === 0 ? `search=${searchValue}` : `&search=${searchValue}`);
        const sort = (search ? `&sortBy=${sortType.sortProp}` : categoryId === 0 ? `sortBy=${sortType.sortProp}` : 
                                                                                   `&sortBy=${sortType.sortProp}`);

        setIsLoading(true);
       /*  await axios.get(`https://63b32a175901da0ab37909d9.mockapi.io/items?${category}${search}${sort}&order=asc`)
                   .then(({data}) => setPizzas(data)); */ 

                await axios.get(`https://63b32a175901da0ab37909d9.mockapi.io/items?page=${currentPage}&limit=3&${category}${search}${sort}&order=asc`)
                .then(({data}) => setPizzas(data));          
                  
        setIsLoading(false); 
        window.scrollTo(0, 0);
      } 
  
      getData();     
      }, [categoryId, sortType, searchValue, currentPage]);

    return (
        <>
         <div className="content__top">
            <Categories categoryId={ categoryId }
                        onClickCategory={ onClickCategory }/>
           {/*  <Sort value={ sortType }
                   onClickSort={ (item) => setSortType(item) }  
                  onClickSort={ onClickSort }/>   */} 

            <Sort />                      
          </div>
          <h2 className="content__title">All pizzas</h2>
          <div className="content__items">
           
           {
            isLoading ? [...new Array(6)].map((_, index) => <PizzaBlockSkeleton key={index}/>) : pizzasList                                                                                   
           }
          </div>

          <Pagination onChangePage={number => setCurrentPage(number)}/>
        </>
    )
}