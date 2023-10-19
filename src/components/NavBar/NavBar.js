import React, {Component} from "react";
import {MenuItems} from './MenuItems'
import './NavBar.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class NavBar extends Component{

    // state = {clicked:false}
    render() {
        console.log('in nav component')
        return(
            <nav className="NavbarItems">
                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

// function handleClick(url){
//     window.location.href = url;
//     console.log("URL----", url)
// }

// function NavBar(){
//     return(
//         <Router>
//         <nav className="NavbarItems">
//             <ul className="nav-menu">
//                 {MenuItems.map((item, index) => {
//                     return(
//                         <li key={index}>
//                             <Link to={item.url} className="navlinks">{item.title}</Link>
//                         </li>
//                     )
//                 })}
//             </ul>
//         </nav>
//         <Switch>
//         <Route path="/"></Route>
//         <Route path="/Work"></Route>
        
//       </Switch>
//         </Router>
//     )
// }

export default NavBar