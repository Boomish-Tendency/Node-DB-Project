import React from 'react'
import EditInputs from './EditInputs'

const RecipeHeaderInfo = (props) => {

    const {recipeName, prepTime, cookTime, totalTime, yields} = props.info
    const {editToggle, changeHandler} = props

    // const editInputArr = [
    //     {
    //         name: "Prep Time",
    //         placeholder: "New Prep Time",
    //         value: prepTime
    //     },
    //     {
    //         name: "Cook Time",
    //         placeholder: "New Cook Time",
    //         value: cookTime
    //     },
    //     {
    //         name: "Total Time",
    //         placeholder: "New Total Time",
    //         value: totalTime
    //     },
    //     {
    //         name: "Yields",
    //         placeholder: "New Serving Size",
    //         value: yields
    //     },
    // ]

    // const inputsMapped = editInputArr.map((input, index) => <EditInputs key={`${input}:${index}:${input.name}`} name={input.name} placeholder={input.placeholder} value={input.value} editToggle={editToggle} changeHandler={changeHandler}/>)
    return (
        <div>
            {!editToggle ? <h1>{recipeName}</h1> : <input name="recipeName" placeholder={recipeName} onChange={e => changeHandler(e)} />}
            <h4>Prep Time: {!editToggle ? prepTime : <input name="prepTime" placeholder={prepTime} onChange={e => changeHandler(e)} />}</h4>
            <h4>Cook Time: {!editToggle ? cookTime : <input name="cookTime" placeholder={cookTime} onChange={e => changeHandler(e)} />}</h4>
            <h4>Total Time: {!editToggle ? totalTime : <input name="totalTime" placeholder={totalTime} onChange={e => changeHandler(e)} />}</h4>
            <h4>Yields: {!editToggle ? yields : <input name="yields" placeholder={yields} onChange={e => changeHandler(e)} />}</h4>
        </div>
    )
}

export default RecipeHeaderInfo