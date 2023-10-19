import React, {Component} from "react";
import {MenuItems} from './MenuItems'
import './NavBar.css'

class NavBar extends Component{
    state = {clicked:false}
    
    render() {
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

export default NavBar