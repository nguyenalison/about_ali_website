import React, {Component} from "react";
import {MenuItems} from './MenuItems'
import './NavBar.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class NavBar extends Component{

    render() {
        console.log('in nav component')
        return(
            <nav className="Navbar">
                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return(
                            <li className="active"key={index}>
                                <a  className={item.cName} href={item.url}>
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

export default NavBar