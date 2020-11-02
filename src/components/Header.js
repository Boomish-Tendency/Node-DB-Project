import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            style: ""
        }
    }
    render() {
        return (
            <header>
                <h1 className="logo">my recipes</h1>
                <div className="page-link-container">
                    <NavLink exact className="page-link" to={"/"}  activeClassName="active">recipes</NavLink>
                    <NavLink exact className="page-link" to={"/create"}  activeClassName="active">create</NavLink>
                    <div className="active-slider"></div>
                </div>
            </header>
        )
    }
}

export default Header
