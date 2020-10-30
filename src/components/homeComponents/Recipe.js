import React, { Component } from 'react'
import List from './listComponents/List'

class Recipe extends Component {
    constructor() {
        super()
        this.state = {
            editToggle: false,
            userInput: ""
        }
    }


    render() {
        const listMapped = this.props.recipe.lists.map(list => {
            return list.map((section, index) => {
    
                return <List 
                    key={`${index}:${section}`} 
                    title={section.title} 
                    listItem={section.ingredients ? section.ingredients : section.directions}
                    listType={section.ingredients ? true : false}
                />
            })
        }) 

        return (
            <div>
                {listMapped}
            </div>
        )
    }
}

export default Recipe
