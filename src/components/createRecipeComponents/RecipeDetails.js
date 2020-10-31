import React, { Component } from 'react'
import NewIngredients from './NewIngredients'
import NewRecipeHeaderInfo from './NewRecipeHeaderInfo'

class RecipeDetails extends Component {
    constructor() {
        super()

        this.state = {
            recipeName: "",
            prepTime: "",
            cookTime: "",
            totalTime: "",
            yeilds: "",
            lists: [
                [
                    {title: "Test", ingredients: []},
                    {title: "Test323212312", ingredients: []},
                ], 
                [
                    {title: "Testdsa", directions: []},
                    {title: "Tedasd", directions: []},
                ]
            ]
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChangeTitle = (e, num1, num2) => {
        this.setState(() => {
            this.state.lists[num1][num2].title = e.target.value
            console.log(this.state.lists[num1][num2])
        })
    }

    handleChangeArr = (e, num1, num2, num3) => {
        this.setState(() => {
            this.state.lists[num1][num2][e.target.name][num3] = e.target.value
            console.log(this.state.lists[num1][num2])
        })
    }

    addItem = e => {
        console.log("added!")
    }
    addHeader = e => {
        console.log("added Header!")
    }

//# Idea to try in the morning: Instead of adding a new input every time, try having one input
//# and when you click add, that's when it'll add the ingredient to the array

    render() {
        // console.log(this.state.lists[0][1].title)
        return (
            <div>
                <NewRecipeHeaderInfo handleChange={this.handleChange}/>
                <NewIngredients handleChangeTitle={this.handleChangeTitle} addHeader={this.addHeader} addItem={this.addItem} handleChangeArr={this.handleChangeArr}/>
            </div>
        )
    }
}

export default RecipeDetails
