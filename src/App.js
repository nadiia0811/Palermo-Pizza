
import React, { createContext, useState } from 'react';
import { Home } from './pages/Home';
import { Header } from './components/header/Header';
import { Cart } from './pages/Cart';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { NotFoundBlock } from './components/notFoundBlock/NotFoundBlock';
//import { useSelector, useDispatch } from 'react-redux';
import './scss/app.scss';

export const AppContext = createContext('');

function App() {

  const [searchValue, setSearchValue] = useState('');
  return ( 
    
      <Router>
        <div className="wrapper">
          <AppContext.Provider value={{ searchValue, setSearchValue }}>
            <Header />
            <div className="content">
              <div className="container">       
                <Routes>
                  <Route path="/" element={<Home />} /> 
                  <Route path="/cart" element={<Cart />} />                  
                  <Route path="*" element={<NotFoundBlock />} /> 
                </Routes>          
              </div>
            </div>
          </AppContext.Provider> 
        </div>
      </Router>       
  );
}

export default App;