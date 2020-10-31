import React, { Component } from 'react'
import RecipeDetails from './createRecipeComponents/RecipeDetails'
import Header from './Header'

class CreateRecipe extends Component {
    render() {
        return (
            <body>
                <Header />
                <RecipeDetails />
            </body>
        )
    }
}

export default CreateRecipe
