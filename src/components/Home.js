import React, { Component } from 'react'
import Header from './Header'
import RecipesList from './homeComponents/RecipesList'

class Home extends Component {
    render() {
        return (
            <body>
                <Header />
                <RecipesList />
            </body>
        )
    }
}

export default Home