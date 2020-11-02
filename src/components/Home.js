import React, { Component } from 'react'
import RecipesList from './homeComponents/RecipesList'

class Home extends Component {
    render() {
        return (
            <div>
                <RecipesList />
            </div>
        )
    }
}

export default Home