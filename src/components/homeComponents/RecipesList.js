import React, { Component } from 'react'
import axios from 'axios'
import RecipeHeaderInfo from './RecipeHeaderInfo'

class RecipesList extends Component {
    constructor() {
        super()
        this.state = {
            recipes: []
        }
    }

    componentDidMount() {
        axios.get("/api/recipes")
        .then(res => this.setState({recipes: res.data}))
        .catch(err => console.log(err))
    }

    render() {

        const recipeMapped = this.state.recipes.map((recipe, index) => <RecipeHeaderInfo key={index} info={recipe}/>)

        return (
            <div>
                <h4>Recipes</h4>
                {recipeMapped}
            </div>
        )
    }
}

export default RecipesList
