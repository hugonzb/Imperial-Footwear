import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Shoe from './screens/Shoe';
import SignIn from './screens/SignIn';
import Register from './screens/Register';
import Favorites from './screens/Favorites';
import { useSelector, useDispatch } from 'react-redux';
import ShoeCreate from './screens/ShoeCreate';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faShoppingCart, faUserCircle, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { logout } from './actions/userActions';
import About from './screens/About';
import CartScreen from './screens/CartScreen';

function App() {
    const dispatch = useDispatch();
    const handleLogout = () =>{
        dispatch(logout());
    }   

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
                    <div>
                    <button className="sidebar-burger" onClick={sidebarOpen}>
                        &#9776;
                    </button>
                    </div>
                    <div className ="if-logo">
                    <Link to="/">Imperial Footwear</Link>
                    </div>
                </div>
                <div className="header-buttons">
                    {/* <Link to="/shoes">Add Product</Link>  */}
                    <Link to="/about"><FontAwesomeIcon icon={faInfoCircle} />&nbsp; About</Link>
                    <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/>&nbsp; Cart</Link>
                    <div className="dropdown">
                        <button className="dropdown-button"> <FontAwesomeIcon icon={faUserCircle} />&nbsp; {
                                userInfo ? ( userInfo.name  ) :
                                ( "Account" )
                                } <FontAwesomeIcon icon={faAngleDown} /></button>
                        <div className="dropdown-content">
                            {
                                userInfo ? ( <Link to="/profile" >Profile</Link> ) :
                                ( <Link to="/signin">Sign In</Link> )
                            }
                            { userInfo ? ( <button type ="button" className="logout-button" onClick={handleLogout} >Log out</button> ) : ( <Link to="/register">Register</Link> ) }
                        </div>
                    </div>
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
                        <Link to="/brand/Adidas">
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
                    <li className= "sidebar-logo">
                        <Link to="/brand/Puma">
                        <button className ="sidebar-button">
                            <img src="../images/puma.png" alt="puma"></img>
                        </button>
                        </Link>
                    </li>
                    <li className= "sidebar-logo">
                        <Link to="/brand/Vans">
                        <button className ="sidebar-button">
                            <img src="../images/vans.png" alt="vans"></img>
                        </button>
                        </Link>
                    </li>
                    <li className= "sidebar-logo">
                        <Link to="/favorites/Hugo">
                        <button className ="sidebar-button">
                            <FontAwesomeIcon icon={faHeart} color="red"/> &nbsp; Hugo's Favorites
                        </button>
                        </Link>
                    </li>
                </ul>
            </aside>
            <div className="main">
                <div className="content-display">
                    <Route path ="/cart/:id?" component ={CartScreen} />
                    <Route path="/about" exact={true} component={About} />
                    <Route path="/shoeCreate" component={ShoeCreate} />
                    <Route path="/shoes" component={ShoeCreate} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/register" component={Register} />
                    <Route path="/shoe/:id" component={Shoe} />
                    <Route path="/brand/:id" component={Home} />
                    <Route path="/favorites/:id" component={Favorites} />
                    <Route path="/" exact={true} component={Home} />
                </div>
            </div>
            <footer className="footer">
                <div>
                Developed and Maintained by Hugo Baird (hugonzb@gmail.com)
                </div>
                <div>
                    <a href="https://github.com/hugonzb">
                        <img className ="github-footer" src="../images/githubwhite.png" alt="github"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/hugo-baird/">
                        <img src="../images/linkedinblue.png" alt="linkedin"></img>
                    </a>
                </div>
            </footer>
        </div>
  </BrowserRouter>  
  );
}

export default App;