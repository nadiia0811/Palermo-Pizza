import pizzas from './assets/pizzas/pizzas.json';
import './scss/app.scss';
import { Header } from './components/header/Header';
import { Categories } from './components/categories/Categories';
import { Sort } from './components/sort/Sort';
import { PizzaBlock } from './components/pizzaBlock/PzzaBlock';


function App() {
  console.log(pizzas)
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
           
           {pizzas.map(obj => <PizzaBlock title={obj.title}   //{...obj}
                                          price={obj.price}
                                          imageUrl={obj.imageUrl}
                                          sizes={obj.sizes}
                                          types={obj.types}
                                          key={obj.id}/>
           )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;