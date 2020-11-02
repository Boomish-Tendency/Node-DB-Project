import React from 'react'
import EditInputs from './EditInputs'

const RecipeHeaderInfo = (props) => {

    const {recipeName, prepTime, cookTime, totalTime, yields} = props.info
    const {editToggle, changeHandler} = props

    const editInputArr = [
        {

            name: "Prep Time",
            placeholder: "New Prep Time",
            value: prepTime
        },
        {
            name: "Cook Time",
            placeholder: "New Cook Time",
            value: cookTime
        },
        {
            name: "Total Time",
            placeholder: "New Total Time",
            value: totalTime
        },
        {
            name: "Yields",
            placeholder: "New Serving Size",
            value: yields
        },
    ]

    const inputsMapped = editInputArr.map((input, index) => <EditInputs key={`${input}:${index}:${input.name}`} name={input.name} placeholder={input.placeholder} value={input.value} editToggle={editToggle} changeHandler={changeHandler}/>)
    return (
        <div>
            {!editToggle ? <h1>{recipeName}</h1> : <input name="recipeName" placeholder={recipeName} onChange={e => changeHandler(e)} />}
            {inputsMapped}
        </div>
    )
}

export default RecipeHeaderInfo