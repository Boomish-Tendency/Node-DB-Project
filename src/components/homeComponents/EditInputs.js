import React from 'react'

const EditInputs = ({name, placeholder, value, editToggle, changeHandler}) => {
    return (
        <h4>
            {name}: {!editToggle ? value : <input 
            name={String(value)}
            placeholder={value}
            // value={value} 
            onChange={e => changeHandler(e)} />}
        </h4>
    )
}

export default EditInputs