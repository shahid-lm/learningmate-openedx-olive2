import React from 'react';
import { Component } from "react";
import nbStyle from'./header.css'

import logo from './images/logo.png'

class ThemeHeader extends Component{
    render(){
        return(
            <div className="outer-container">
                <div className="page-headers">
                    <a href="/dashboard">
                        <img className="logo" src={logo} alt="LearningMate logo" style={nbStyle.logo}></img>
                    </a>
                </div>
            </div>
        )
    }
}
export default ThemeHeader;