
import React from 'react';
import { Home } from './pages/Home';
import { Header } from './components/header/Header';
import { Cart } from './pages/Cart';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './scss/app.scss';
import { NotFoundBlock } from './components/notFoundBlock/NotFoundBlock';


function App() {
  const [searchValue, setSearchValue] = React.useState('');
  return ( 
  <Router>
    <div className="wrapper">
      <Header searchValue={ searchValue }
              setSearchValue={ setSearchValue }/>
      <div className="content">
        <div className="container">       
          <Switch>
            <Route path="/" exact>
               <Home searchValue={searchValue}/>
            </Route>

            <Route path="/cart">
               <Cart />
            </Route>

            <Route path="*">
               <NotFoundBlock />
            </Route>

          </Switch>
        
        </div>
      </div>
    </div>
  </Router>   
  );
}

export default App;