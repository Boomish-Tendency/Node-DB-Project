import React, { Component } from 'react'
import ListItem from './listComponents/ListItem'

class Recipe extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }


    render() {
        const {editToggle, removeItem, addItem, recipe, changeHandlerItems} = this.props
        // const listMapped = this.props.recipe.lists.map(list => {
        //     return list.map((section, index) => {
    
        //         return <List 
        //             key={`${index}:${section}`} 
        //             title={section.title} 
        //             listItem={section.ingredients ? section.ingredients : section.directions}
        //             listType={section.ingredients ? true : false}
        //         />
        //     })
        // }) 

        let ingredientsMapped = []
        if (recipe.ingredients) {
            ingredientsMapped = recipe.ingredients.map((ingredient, index) => {
                return (
                    <div key={`div${ingredient}:${index}`}>
                        <ListItem key={`${index}:${ingredient}`} item={ingredient}/>
                        {editToggle ? <button key={`X${index}`} name="ingredients" onClick={e => removeItem(e, index)}>X</button> : null} 
                    </div>
                )
            })
        }

        let directionsMapped = []
        if (recipe.directions) {
            directionsMapped = recipe.directions.map((direction, index) => {
                return (
                    <div key={`div${direction}:${index}`}>
                        <ListItem key={`${index}:${direction}`} item={direction}/>
                        {editToggle ? <button key={`XTRA${index}`} name="directions" onClick={e => removeItem(e, index)}>X</button> : null} 
                    </div>
            )})
        }

        return (
            <div>
                <h2>Ingredients</h2>
                <ul>{ingredientsMapped}</ul>
                {editToggle ? (
                    <div>
                        <input name="ingredientsInput" onChange={e => changeHandlerItems(e)} placeholder="Add Ingredients"></input>
                        <button name="ingredients" id="ingredientsInput" onClick={e => addItem(e)}>+</button>
                    </div>
                ) : null}
                <h2>Directions</h2>
                <ol>{directionsMapped}</ol>
                {editToggle ? (
                    <div>
                        <input name="directionsInput" onChange={e => changeHandlerItems(e)} placeholder="Add Directions"></input>
                        <button name="directions" id="directionsInput" onClick={e => addItem(e)}>+</button>
                    </div>
                ) : null}
            </div>
        )
    }
}

export default Recipe
