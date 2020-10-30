import React from 'react'

const RecipeHeaderInfo = (props) => {

    const {recipeName, prepTime, cookTime, totalTime, yields} = props.info
    return (
        <div>
            <h1>{recipeName}</h1>
            <h4>Prep Time: {prepTime}</h4>
            <h4>Cook Time: {cookTime}</h4>
            <h4>Total Time: {totalTime}</h4>
            <h4>Yields: {yields}</h4>
        </div>
    )
}

export default RecipeHeaderInfo