import React, { useState, useContext, useEffect } from 'react';
import PizzaBlockSkeleton from '../components/pizzaBlock/PizzaBlockSkeleton';
import { Categories } from '../components/categories/Categories';
import { Sort } from '../components/sort/Sort';
import { PizzaBlock } from '../components/pizzaBlock/PzzaBlock';
import { Pagination } from '../components/pagination/Pagination';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { fetchPizzas } from '../redux/slices/pizzaSlice';


export const Home = () => {
    
    const { categoryId, sortType, currentPage } = useSelector(state => state.filter);   
    const [isLoading, setIsLoading] = useState(true);
    const {searchValue} = useContext(AppContext);
    
   
    const pizzas = useSelector((state) => state.pizzas.items);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const list = [{name: 'popularity', sortProp: 'rating'},  
                  {name: 'price', sortProp: 'price'},  
                  {name: 'alphabet', sortProp: 'title'}]; 
 
    const onClickCategory = (index) => {
      dispatch(setCategoryId(index)); 
    };

    const onChangePage = (number) => {
      dispatch(setCurrentPage(number));
    } 
    
    useEffect(() => {    
      async function getData () {
       setIsLoading(true);
      
       const category = (categoryId > 0 ? `category=${categoryId}` : '');
       const search = (!searchValue ? '' : categoryId === 0 ? `search=${searchValue}` : `&search=${searchValue}`);
       const sort = (search ? `&sortBy=${sortType.sortProp}` : categoryId === 0 ? `sortBy=${sortType.sortProp}` : 
       `&sortBy=${sortType.sortProp}`); 
       
       try { 
         dispatch(fetchPizzas({
           category,
           search,
           sort,
           currentPage
         }));
        

         setIsLoading(false); 
         window.scrollTo(0, 0);
       }catch(error){
         setIsLoading(false);
       }
      
     } 
 
     getData();     
     }, [categoryId, sortType.sortProp, searchValue, currentPage]);

    const pizzasList = pizzas.map(obj => <PizzaBlock key={obj.id} {...obj}/>);
    

  useEffect(() => {
    if (window.location.search) {
    const params = qs.parse(window.location.search.substring(1));
    const sort = list.find(obj => obj.sortProp === params.sortProp);
    dispatch(setFilters({...params, ...sort})) ;      
    }
  }, []);
    
    
  useEffect(() => {
    const queryString = qs.stringify({
      sortProp: sortType.sortProp,
      categoryId,
      currentPage,        
    });
        
     navigate(`?${queryString}`)
  }, [categoryId, sortType.sortProp, searchValue, currentPage]);  

     
    return (
        <div className='container'>
         <div className="content__top">
            <Categories categoryId={ categoryId }
                        onClickCategory={ onClickCategory }/>        
            <Sort />                      
          </div>
          <h2 className="content__title">All pizzas</h2>
          <div className="content__items">
           
            {
              isLoading ? [...new Array(6)].map((_, index) => <PizzaBlockSkeleton key={index}/>) : pizzasList                                                                                   
            }
         </div>

         <Pagination onChangePage={ onChangePage } currentPage = { currentPage }/>
        </div>
    )
}