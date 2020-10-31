import React, { Component } from 'react'
import axios from 'axios'
import RecipeHeaderInfo from './RecipeHeaderInfo'
import { Redirect } from 'react-router-dom'

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

    redirect = (id) => {
        this.setState({ isRedirect: true, place: id})
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
