import React from 'react'

const NewList = ({ingredient, direction}) => {
    return (
        ingredient ? <li>{ingredient}</li> : <li>{direction}</li>
    )
}

export default NewList