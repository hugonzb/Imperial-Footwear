import React from 'react';
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
                <h3>Brands</h3>
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
                        <li> 
                            <div className="footwear">
                                <img className="shoe-image" src="/images/jordan1.jpg" alt="bloodline"></img>
                                <div className="shoe-name">
                                    <a href="shoe.html">Jordan 1 Bloodline</a>
                                </div>
                                <div className="shoe-brand">Jordan</div>
                                <div className="shoe-year">2019</div>
                                <div className="shoe-price">$300</div>
                                <div className="shoe-rating">10 stars</div>
                            </div>
                        </li>
                        <li> 
                            <div className="footwear">
                                <img className="shoe-image" src="/images/jordan1.jpg" alt="bloodline"></img>
                                <div className="shoe-name">
                                    <a href="shoe.html">Jordan 1 Bloodline</a>
                                </div>
                                <div className="shoe-brand">Jordan</div>
                                <div className="shoe-year">2019</div>
                                <div className="shoe-price">$300</div>
                                <div className="shoe-rating">10 stars</div>
                            </div>
                        </li>
                        <li> 
                            <div className="footwear">
                                <img className="shoe-image" src="/images/jordan1.jpg" alt="bloodline"></img>
                                <div className="shoe-name">
                                    <a href="shoe.html">Jordan 1 Bloodline</a>
                                </div>
                                <div className="shoe-brand">Jordan</div>
                                <div className="shoe-year">2019</div>
                                <div className="shoe-price">$300</div>
                                <div className="shoe-rating">10 stars</div>
                            </div>
                        </li>
                        <li> 
                            <div className="footwear">
                                <img className="shoe-image" src="/images/jordan1.jpg" alt="bloodline"></img>
                                <div className="shoe-name">
                                    <a href="shoe.html">Jordan 1 Bloodline</a>
                                </div>
                                <div className="shoe-brand">Jordan</div>
                                <div className="shoe-year">2019</div>
                                <div className="shoe-price">$300</div>
                                <div className="shoe-rating">10 stars</div>
                            </div>
                        </li>
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
