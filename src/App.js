
import React from 'react';
import { Home } from './pages/Home';
import { Header } from './components/header/Header';
import { Cart } from './pages/Cart';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './scss/app.scss';
import { NotFoundBlock } from './components/notFoundBlock/NotFoundBlock';

export const AppContext = React.createContext('');


function App() {
  const [searchValue, setSearchValue] = React.useState('');
  return ( 
  <Router>
    <div className="wrapper">
      <AppContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">       
            <Switch>
              <Route path="/" exact>
                <Home />
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
      </AppContext.Provider>
    </div>
  </Router>   
  );
}

export default App;