import axios from 'axios'
import React, { Component } from 'react'
import NewItems from './NewItems'
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


        const ingredientsMapped = this.state.ingredients.map((ingredient, index) => <NewList key={`${ingredient}: ${index}`} ingredient={ingredient}/>)
        const directionsMapped = this.state.directions.map((direction, index) => <NewList key={`${direction}: ${index}`} direction={direction}/>)

        return (
        <div className="recipe-details-container">
            <h4 className="create-recipe-title">create recipe</h4>
            <div className="create-recipe-container">
                <form onSubmit={e => this.addRecipe(e, this.state)}>
                    <NewRecipeHeaderInfo handleChange={this.handleChange}/>
                    <NewItems handleChange={this.handleChange} addHeader={this.addHeader} addItem={this.addItem}/>
                    <div className="lists">
                        <ul>
                            {ingredientsMapped}
                        </ul>
                        <ol>
                            {directionsMapped}
                        </ol>
                    </div>
                    <button className="add-recipe" type="submit">Add Recipe</button>
                </form>
            </div>
        </div>
        )
    }
}

export default RecipeDetails
