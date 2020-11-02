import React, { Component } from 'react'
import RecipeDetails from './createRecipeComponents/RecipeDetails'
import Header from './Header'

class CreateRecipe extends Component {
    render() {
        return (
            <div>
                <Header />
                <RecipeDetails />
            </div>
        )
    }
}

export default CreateRecipe
