import React from 'react'
import AddItem from './AddItem'

const NewIngredients = ({addItem, handleChange}) => {
    const addItems = [
        // {
        //     names: "ingredientsHeaders",
        //     ids: "ingredientsHeader",
        //     placeholders: "Add Ingredients Header",
        //     header: true,
        // },
        {
            names: "ingredients",
            ids: "addIngredient",
            placeholders: "Add An Ingredient",
            header: false,
        },
        // {
        //     names: "directionsHeaders",
        //     ids: "directionsHeader",
        //     placeholders: "Add Directions Header",
        //     header: true,
        // },
        {
            names: "directions",
            ids: "addDirection",
            placeholders: "Add A Direction",
            header: false,
        }
    ]
    
    const addItemMapped = addItems.map(itemType => {
        return <AddItem 
            key={`${itemType}: ${itemType.ids}`}
            names={itemType.names} 
            ids={itemType.ids} 
            addItem={addItem} 
            handleChange={handleChange} 
            placeholders={itemType.placeholders}
            header={itemType.header} 
        />
    })
    
    return (
        <div>
            {addItemMapped}
        </div>
    )
}

export default NewIngredients