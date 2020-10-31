import React from 'react'

const NewRecipeHeaderInfo = ({handleChange}) => {
    return (
        <form>
            <input name="recipeName" onChange={e => handleChange(e)} placeholder="Recipe Name"/>
            <input name="prepTime" onChange={e => handleChange(e)} placeholder="Prep Time"/>
            <input name="recipeName" onChange={e => handleChange(e)} placeholder="Cook Time"/>
            <input placeholder="Total Time"/>
            <input placeholder="Yields"/>
        </form>
    )
}

export default NewRecipeHeaderInfo