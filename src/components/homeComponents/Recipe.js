import React, { Component } from 'react'
import ListItem from './listComponents/ListItem'

class Recipe extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }


    render() {
        const {editToggle, removeItem, changeHandler, addItem} = this.props
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

        const ingredientsMapped = this.props.recipe.ingredients.map((ingredient, index) => {
            return (
                <div key={`div${ingredient}:${index}`}>
                    <ListItem key={`${index}:${ingredient}`} item={ingredient}/>
                    {editToggle ? <span key={`X${index}`} onClick={e => removeItem(e, index)}>X</span> : null} 
                </div>
            )
        })

        const directionsMapped = this.props.recipe.directions.map((direction, index) => {
            return <ListItem key={`${index}:${direction}`} item={direction}/>
        })

        return (
            <div>
                <h2>Ingredients</h2>
                <ul>{ingredientsMapped}</ul>
                {editToggle ? (
                    <div>
                        <input name={"ingredientsInput"} onChange={e => changeHandler(e)} placeholder="Add Ingredients"></input>
                        <button onClick={e => addItem(e)}>+</button>
                    </div>
                ) : null}
                <h2>Directions</h2>
                <ol>{directionsMapped}</ol>
                {editToggle ? (
                    <div>
                        <input name={"directionsInput"} onChange={e => changeHandler(e)} placeholder="Add Directions"></input>
                        <button onClick={e => addItem(e)}>+</button>
                    </div>
                ) : null}
            </div>
        )
    }
}

export default Recipe
