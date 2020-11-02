import React from 'react'

const AddItem = ({names, ids, placeholders, addItem, handleChange, header}) => {
    return (
        <div>
            <input name={ids} placeholder={placeholders} onChange={e => handleChange(e)}/>
            <button name={names} id={ids} onClick={e => addItem(e, header)}>+</button>
        </div>
    )
}

export default AddItem