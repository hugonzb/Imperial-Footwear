import React from 'react';
import data from './data';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Shoe from './screens/Shoe';

function App() {

  const sidebarOpen = () => {
      document.querySelector(".sidebar-menu").classList.add("open");
  }
  const sidebarClose = () => {
    document.querySelector(".sidebar-menu").classList.remove("open");
  }

  return (
  <BrowserRouter>
    <div className="grid-container">
            <header className="header">
                <div className="main-logo">
                    <button onClick={sidebarOpen}>
                        &#9776;
                    </button>
                    <Link to="/">Imperial Footwear</Link>
                </div>
                <div className="header-buttons">
                    <a href="creataccount.html">Create Account</a>
                    <a href="signin.html">Sign In</a>
                    <a href="shoppingcart.html">Shopping Cart</a>
                </div>
            </header>
            <aside className="sidebar-menu">
                <h3 className="sidebar-name">Brands</h3>
                <button className="sidebar-close" onClick={sidebarClose}>x</button>
                <ul>
                    <li>
                        <a href="index.html">Nike</a>
                    </li>
                    <li>
                        <a href="index.html">Jordan</a>
                    </li>
                    <li>
                        <a href="index.html">Adidas</a>
                    </li>
                </ul>
            </aside>
            <div className="main">
                <div className="content-display">
                    <Route path="/shoe/:id" component={Shoe} />
                    <Route path="/" exact={true} component={Home} />
                </div>
            </div>
            <footer className="footer">
                @hugonzb
            </footer>
        </div>
  </BrowserRouter>
  );
}

export default App;
