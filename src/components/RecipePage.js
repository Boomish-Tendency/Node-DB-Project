import React, { Component } from 'react'
import axios from 'axios'
import Recipe from './homeComponents/Recipe'
import RecipeHeaderInfo from './homeComponents/RecipeHeaderInfo'

class RecipePage extends Component {
    constructor() {
        super()
        this.state = {
            recipe: {ingredients: [], directions: []},
            editToggle: false,
            ingredientsInput: "",
            directionsInput: "",

            recipeName: "",
            prepTime: "",
            cookTime: "",
            totalTime: "",
            yeilds: "",
            ingredients: [],
            directions: []
        }
    }

    componentDidMount = () => {
        axios.get(`/api/recipes/${this.props.match.params.id}`)
        .then(res => this.setState({recipe: res.data}))
        .catch(err => console.log(err))
    }

    editRecipe = (recipeUpdate) => {
        axios.put(`api/recipes/${this.props.match.params.id}`, recipeUpdate)
        .then(res => this.setState({recipes: res.data}))
        .catch(err => console.log(err))
    }

    editToggleFunc = () => {
        this.setState({editToggle: !this.state.editToggle})
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    removeItem = (e, index) => {

    }

    addItem = e => {

    }

    render() {
        const {recipe, editToggle, recipeName, prepTime, cookTime, totalTime, yeilds, ingredients, directions} = this.state
        return (
            <div>
                <RecipeHeaderInfo info={recipe} editToggle={editToggle} changeHandler={this.changeHandler}/>
                <Recipe key={recipe.id} recipe={recipe} editToggle={editToggle} changeHandler={this.changeHandler} removeItem={this.removeItem} addItem={this.addItem}/>
                {!editToggle ? <button onClick={this.editToggleFunc}>Edit Recipe</button> : (
                    <div>
                        <button onClick={this.editToggleFunc}>Cancel</button>
                        <button onClick={this.editRecipe({ recipeName, prepTime, cookTime, totalTime, yeilds, ingredients, directions})}>Save</button>
                    </div>
                )}
            </div>
        )
    }
}

export default RecipePage
