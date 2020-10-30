import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <h1>Our Recipes</h1>
            <Link ClassName="page-link" to={"/"}>Recipes</Link>
            <Link ClassName="page-link" to={"/create"} >Create</Link>
        </header>
    )
}

export default Header
