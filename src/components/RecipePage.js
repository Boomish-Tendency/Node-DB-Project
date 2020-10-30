import React, { Component } from 'react'
import axios from 'axios'
import Recipe from './homeComponents/Recipe'
import RecipeHeaderInfo from './homeComponents/RecipeHeaderInfo'

class RecipePage extends Component {
    constructor() {
        super()
        this.state = {
            recipe: {lists: []}
        }
    }

    componentDidMount() {
        axios.get(`/api/recipes/${this.props.match.params.id}`)
        .then(res => this.setState({recipe: res.data}))
        .catch(err => console.log(err))
    }

    editRecipe = (index, recipeUpdate) => {
        axios.put(`api/recipes/${index}`, recipeUpdate)
        .then(res => this.setState({recipes: res.data}))
        .catch(err => console.log(err))
    }

    render() {
        const {recipe} = this.state
        
        return (
            <div>
                <RecipeHeaderInfo info={recipe}/>
                <Recipe key={recipe.id} recipe={recipe}/>
            </div>
        )
    }
}

export default RecipePage
