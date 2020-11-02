import React from 'react'

const EditInputs = ({name, value, editToggle, changeHandler}) => {
    return (
        <h4>
            {name}: {!editToggle ? value : <input 
            name={String(value)}
            placeholder={value}
            onChange={e => changeHandler(e)} />}
        </h4>
    )
}

export default EditInputs