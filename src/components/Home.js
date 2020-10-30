import React, { Component } from 'react'
import Header from './Header'
import RecipesList from './homeComponents/RecipesList'

class Home extends Component {
    render() {
        return (
            <body>
                <Header />
                <h1>THIS IS THE HOME PAGE</h1>
                <RecipesList />
            </body>
        )
    }
}

export default Home