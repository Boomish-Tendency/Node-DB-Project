import React from 'react'

const NewIngredients = ({addHeader, addItem, handleChangeTitle, handleChangeArr}) => {

    return (
        <div>
            <button name="ingredients"onClick={e => addHeader(e)}>+</button>
            <button name="directions"onClick={e => addHeader(e)}>+</button>
            

            <input name="title" onChange={e => handleChangeTitle(e, 0, 0)}/>


            <input placeholder="Add An Ingredient" name="ingredients" onChange={e => handleChangeArr(e, 0, 0, 0)}/>
            <button name="ingredients" onClick={e => addItem(e)}>+</button>

            <input placeholder="Add Directions" name="directions" onChange={e => handleChangeArr(e, 1, 0, 0)}/>
            <button name="directions" onClick={e => addItem(e)}>+</button>
        </div>
        )
}

export default NewIngredients