import axios from 'axios'
import React, { Component } from 'react'
import NewIngredients from './NewIngredients'
import NewList from './NewList'
import NewRecipeHeaderInfo from './NewRecipeHeaderInfo'

class RecipeDetails extends Component {
    constructor() {
        super()

        this.state = {
            recipeName: "",
            prepTime: "",
            cookTime: "",
            totalTime: "",
            yields: "",

            // ingredientsHeader: "",
            // directionsHeader: "",
            addIngredient: "",
            addDirection: "",
            
            // ingredientsHeaders: [],
            // directionsHeaders: [],
            ingredients: [],
            directions: [],

            // ingredientsArrId: -1,
            // directionsArrId: -1,
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    addItem = (e, header) => {
        e.preventDefault()

        // if (header) {
        //     if (e.target.name === "ingredientsHeaders") {
        //         this.setState(prevState => ({ingredientsArrId: prevState.ingredientsArrId + 1}))
        //     } else  {
        //         this.setState(prevState => ({directionsArrId: prevState.directionsArrId + 1}))
        //     }

        //     this.setState(prevState => ({
        //             [e.target.name]: [...prevState[e.target.name], this.state[e.target.id]]
        //     }))

        // } else {

        //     if (e.target.name === "ingredients") {
        //         this.setState(prevState => ({
        //             [e.target.name]: 
        //         }))

        //     } else {
        //         this.setState(prevState => ({
        //             [e.target.name]: [...prevState[e.target.name][this.state.directionsArrId], this.state[e.target.id]]
        //         }))
        //     }

        // }

        this.setState(prevState => ( {[e.target.name]: [...prevState[e.target.name], this.state[e.target.id]]} ))
    }

    addRecipe = (e, recipe) => {
        e.preventDefault()

        axios.post("/api/recipes", recipe)
    }
    render() {


        const ingredientsMapped = this.state.ingredients.map(ingredient => <NewList key={ingredient} ingredient={ingredient}/>)
        const directionsMapped = this.state.directions.map(direction => <NewList key={direction} direction={direction}/>)

        return (
            <form onSubmit={e => this.addRecipe(e, this.state)}>
                <NewRecipeHeaderInfo handleChange={this.handleChange}/>
                <NewIngredients handleChange={this.handleChange} addHeader={this.addHeader} addItem={this.addItem}/>
                <ul>
                    {ingredientsMapped}
                </ul>
                <ol>
                    {directionsMapped}
                </ol>
                <button type="submit">Add Recipe</button>
            </form>
        )
    }
}

export default RecipeDetails
