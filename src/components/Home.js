import React, { Component } from 'react'
import RecipesList from './homeComponents/RecipesList'
import '../App.css'

class Home extends Component {
    render() {
        return (
            <div className="recipe-list-container">
                <RecipesList />
            </div>
        )
    }
}

export default Home