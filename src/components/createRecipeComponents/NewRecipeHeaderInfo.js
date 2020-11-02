import React from 'react'

const NewRecipeHeaderInfo = ({handleChange}) => {
    return (
        <form>
            <div className="title-container">
                <h4 className="header-details-name">title: </h4>
                <input className="header-input" name="recipeName" onChange={e => handleChange(e)} placeholder="Recipe Name"/>
            </div>
            <div className="create-recipe-details-inputs">
                <div className="header-details-inputs">
                    <div className="input-container">
                        <h4 className="header-details-name">prep time: </h4>
                        <input className="header-input" name="prepTime" onChange={e => handleChange(e)} placeholder="Prep Time"/>
                    </div>
                    <div className="input-container">
                        <h4 className="header-details-name">cook time: </h4>
                        <input className="header-input" name="cookTime" onChange={e => handleChange(e)} placeholder="Cook Time"/>
                    </div>
                </div>
                <div className="header-details-inputs">
                    <div className="input-container">
                        <h4 className="header-details-name">total time: </h4>
                        <input className="header-input" name="totalTime" onChange={e => handleChange(e)} placeholder="Total Time"/>
                    </div>
                    <div className="input-container">
                        <h4 className="header-details-name">yields: </h4>
                        <input className="header-input" name="yields" onChange={e => handleChange(e)} placeholder="Yields"/>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default NewRecipeHeaderInfo