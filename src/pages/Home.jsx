import React from 'react';
import PizzaBlockSkeleton from '../components/pizzaBlock/PizzaBlockSkeleton';
import { Categories } from '../components/categories/Categories';
import { Sort } from '../components/sort/Sort';
import { PizzaBlock } from '../components/pizzaBlock/PzzaBlock';
import { Pagination } from '../components/pagination/Pagination';
import axios from 'axios';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';
import { AppContext } from '../App';
//import { useNavigate } from 'react-router-dom';


export const Home = () => {

    const { categoryId, sortType, currentPage } = useSelector(state => state.filter)  //filter = filterSlice in state(store.js)
    //const navigate = useNavigate();
    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const {searchValue} = React.useContext(AppContext);
    const dispatch = useDispatch();
 
    const onClickCategory = (index) => {
      dispatch(setCategoryId(index)) 
    };

    const onChangePage = (number) => {
      dispatch(setCurrentPage(number));
    }    

    const pizzasList = pizzas.map(obj => <PizzaBlock key={obj.id} {...obj}/>);
    
    React.useEffect(() => {    
       async function getData () {
        const category = (categoryId > 0 ? `category=${categoryId}` : '');
        const search = (!searchValue ? '' : categoryId === 0 ? `search=${searchValue}` : `&search=${searchValue}`);
        const sort = (search ? `&sortBy=${sortType.sortProp}` : categoryId === 0 ? `sortBy=${sortType.sortProp}` : 
                                                                                  `&sortBy=${sortType.sortProp}`);
        setIsLoading(true);
        
        await axios.get(`https://63b32a175901da0ab37909d9.mockapi.io/items?page=${currentPage}&limit=3&${category}${search}${sort}&order=asc`)
        .then(({data}) => setPizzas(data));          
                  
        setIsLoading(false); 
        window.scrollTo(0, 0);
      } 
  
      getData();     
      }, [categoryId, sortType, searchValue, currentPage]);

      
     /*  React.useEffect(() => {
        const queryString = qs.stringify({
          sortProp: sortType.sortProp,
          categoryId,
          currentPage,
        })

        navigate(`?${queryString}`)
      }, [categoryId, sortType, searchValue, currentPage]) */

     
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