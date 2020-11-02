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
            recipeOG: {},
        }
    }

    
    componentDidMount = () => {
        axios.get(`/api/recipes/${this.props.match.params.id}`)
        .then(res => this.setState({recipe: res.data, recipeOG: res.data}))
        .catch(err => console.log(err))
    }

    editRecipe = recipeUpdate => {
        axios.put(`api/recipes/${this.props.match.params.id}`, recipeUpdate)
        .then(res => this.setState({recipe: res.data}))
        .catch(err => console.log(err))

        this.editToggleFunc()
    }

    editToggleFunc = () => {
        this.setState({editToggle: !this.state.editToggle})
    }

    changeHandler = e => {
        this.setState({recipe: {...this.state.recipe, [e.target.name]: e.target.value}})
    }

    changeHandlerItems = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    removeItem = (e, index) => {
        const {recipe} =  this.state
        this.setState({recipe: {...recipe, [e.target.name]: recipe[e.target.name].filter((item, index2) => index2 !== index)}})
    }

    addItem = e => {
        const {recipe} =  this.state
        this.setState({recipe: {...recipe, [e.target.name]: [...recipe[e.target.name], this.state[e.target.id]]}})
    }

    cancelEdit = () => {
        this.setState({recipe: this.state.recipeOG})
        this.editToggleFunc()
    }

    render() {
        const {recipe, editToggle} = this.state
        return (
            <div>
                <RecipeHeaderInfo info={recipe} editToggle={editToggle} changeHandler={this.changeHandler}/>
                <Recipe recipe={recipe} editToggle={editToggle} changeHandler={this.changeHandler} removeItem={this.removeItem} addItem={this.addItem} changeHandlerItems={this.changeHandlerItems}/>
                {!editToggle ? <button onClick={this.editToggleFunc}>Edit Recipe</button> : (
                    <div>
                        <button onClick={this.cancelEdit}>Cancel</button>
                        <button onClick={() => this.editRecipe(recipe)}>Save</button>
                    </div>
                )}
            </div>
        )
    }
}

export default RecipePage
