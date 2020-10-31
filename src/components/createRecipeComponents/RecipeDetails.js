import React, { Component } from 'react'
import NewRecipeHeaderInfo from './NewRecipeHeaderInfo'

class RecipeDetails extends Component {
    constructor() {
        super()

        this.state = {
            recipeName: "",
            prepTime: "",
            CookTime: "",
            TotalTime: "",
            Yeilds: "",
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <NewRecipeHeaderInfo handleChange={this.handleChange}/>
            </div>
        )
    }
}

export default RecipeDetails
