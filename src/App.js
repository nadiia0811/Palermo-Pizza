//import logo from './logo.svg';
import './App.css';
import './scss/app.scss';
import { Header } from './components/header/Header';
import { Categories } from './components/categories/Categories';
import { Sort } from './components/sort/Sort';
import { PizzaBlock } from './components/pizzaBlock/PzzaBlock';


function App() {
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
            <PizzaBlock title="Margherita Pizza" price={10}/>
            <PizzaBlock title="Cheese Pizza" price={10}/>
            <PizzaBlock title="BBQ Chicken Pizza" price={10}/>
            <PizzaBlock title="Pepperoni Pizza" price={10}/>
            <PizzaBlock title="Hawaiian Pizza" price={10}/>
            <PizzaBlock title="Buffalo Pizza" price={10}/>
            <PizzaBlock title="Rustica Pizza" price={10}/>
            <PizzaBlock title="Carbonara Pizza" price={10}/>
            <PizzaBlock title="Grilled Pizza" price={10}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;