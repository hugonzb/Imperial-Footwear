import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Shoe from './screens/Shoe';
import SignIn from './screens/SignIn';
import Register from './screens/Register';
import { useSelector } from 'react-redux';
import ShoeCreate from './screens/ShoeCreate';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function App() {

    const userSignin = useSelector(state=>state.userSignin);
    const {userInfo} = userSignin;

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
                    <div className="dropdown">
                        <button className="dropdown-button"> {
                                userInfo ? ( userInfo.name ) :
                                ( "Account" )
                                } <FontAwesomeIcon icon={faAngleDown} /></button>
                        <div className="dropdown-content">
                            {
                                userInfo ? ( <Link to="/profile">Profile</Link> ) :
                                ( <Link to="/signin">Sign In</Link> )
                            }
                            { userInfo ? ( null ) : ( <Link to="/register">Register</Link> ) }
                        </div>
                    </div>
                    {/* <Link to="/shoes">Add Product</Link>  */}
                    <a href="shoppingcart.html">Shopping Cart</a>
                </div>
            </header>
            <aside className="sidebar-menu">
                <button className="sidebar-close" onClick={sidebarClose}>x</button>
                <ul className = "sidebar-nav">
                    <h3 className="sidebar-name">Brands</h3>
                    <li className= "sidebar-logo">
                        <Link to="/brand/Nike">
                            <button className ="sidebar-button">
                                <img src="../images/nike.png" alt="nike"></img>
                            </button>
                        </Link>
                    </li>
                    <li className= "sidebar-logo">
                        <Link to="/brand/Jordan">
                            <button className ="sidebar-button">
                                <img src="../images/jordan.png" alt="jordan"></img>
                            </button>
                        </Link>
                    </li>
                    <li className= "sidebar-logo">
                        <Link to="/brand/adidas">
                        <button className ="sidebar-button" href="index.html">
                            <img src="../images/adidas.png" alt="adidas"></img>
                        </button>
                        </Link>
                    </li>
                    <li className= "sidebar-logo">
                        <Link to="/brand/Converse">
                        <button className ="sidebar-button">
                            <img src="../images/converse.png" alt="converse"></img>
                        </button>
                        </Link>
                    </li>
                    <li className= "sidebar-logo">
                        <Link to="/brand/BAPE">
                        <button className ="sidebar-button">
                            <img src="../images/bape.png" alt="bape"></img>
                        </button>
                        </Link>
                    </li>
                    <li className= "sidebar-logo">
                        <Link to="/brand/Asics">
                        <button className ="sidebar-button">
                            <img src="../images/asics.png" alt="asics"></img>
                        </button>
                        </Link>
                    </li>
                </ul>
            </aside>
            <div className="main">
                <div className="content-display">
                    <Route path="/shoes" component={ShoeCreate} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/register" component={Register} />
                    <Route path="/shoe/:id" component={Shoe} />
                    <Route path="/brand/:id" component={Home} />
                    <Route path="/" exact={true} component={Home} />
                </div>
            </div>
            <footer className="footer">
                <div>
                GitHub: hugonzb LinkedIn: Hugo Baird
                </div>
                <div>
                Email: hugonzb@gmail.com
                </div>
            </footer>
        </div>
  </BrowserRouter>  
  );
}

export default App;
