import React from 'react';
import data from './data';
import './App.css';

function App() {

  const sidebarOpen = () => {
      document.querySelector(".sidebar-menu").classList.add("open");
  }
  const sidebarClose = () => {
    document.querySelector(".sidebar-menu").classList.remove("open");
  }

  return (
    <div className="grid-container">
            <header className="header">
                <div className="main-logo">
                    <button onClick={sidebarOpen}>
                        &#9776;
                    </button>
                    <a href="index.html">Imperial Footwear</a>
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
                    <ul className="all-footwear">
                      {
                      data.shoes.map(shoe =>               
                        <li> 
                            <div className="footwear">
                                <img className="shoe-image" src={shoe.image} alt="shoe"></img>
                                <div className="shoe-name">
                                    <a href="shoe.html">{shoe.name}</a>
                                </div>
                                <div className="shoe-brand">{shoe.brand}</div>
                                <div className="shoe-year">{shoe.year}</div>
                                <div className="shoe-price">{shoe.price}</div>
                                <div className="shoe-rating">{shoe.rating}</div>
                            </div>
                        </li>)
                      }   
                    </ul>
                </div>
            </div>
            <footer className="footer">
                @hugonzb
            </footer>
        </div>
  );
}

export default App;
