import React, { Component } from 'react'
import axios from 'axios'
import RecipeHeaderInfo from './RecipeHeaderInfo'
import { Link } from 'react-router-dom'

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

    deleteRecipe(id){
        axios.delete(`/api/recipes/${id}`)
        .then(res => this.setState({recipes: res.data}))
        .catch(err => console.log(err))
    }

    render() {
        const recipeMapped = this.state.recipes.map((recipe, index) => {
            return (
                <div className="recipe-list-item">
                    <button className="x-delete-recipe hide" onClick={() => this.deleteRecipe(index)}>X</button>
                    <Link className="link-to-recipe-page" to={`/recipes/${index}`}>
                        <RecipeHeaderInfo key={index} info={recipe}/>
                    </Link>
                </div>
            )
        })

        return (
            <div>
                <h4>Recipes</h4>
                <div className="recipe-list">{recipeMapped}</div>
            </div>
        )
    }
}

export default RecipesList
