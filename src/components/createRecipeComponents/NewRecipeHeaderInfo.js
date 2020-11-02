import React from 'react'

const NewRecipeHeaderInfo = ({handleChange}) => {
    return (
        <form>
            <input name="recipeName" onChange={e => handleChange(e)} placeholder="Recipe Name"/>
            <input name="prepTime" onChange={e => handleChange(e)} placeholder="Prep Time"/>
            <input name="cookTime" onChange={e => handleChange(e)} placeholder="Cook Time"/>
            <input name="totalTime" onChange={e => handleChange(e)} placeholder="Total Time"/>
            <input name="yields" onChange={e => handleChange(e)} placeholder="Yields"/>
        </form>
    )
}

export default NewRecipeHeaderInfo