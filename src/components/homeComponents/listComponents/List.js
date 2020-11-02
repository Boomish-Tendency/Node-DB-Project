import React from 'react'
import ListItem from './ListItem'

const List = ({title, listItem, listType}) => {

    const itemMapped = listItem.map((item, index) => <ListItem key={`${item}:${index}`} item={item}/>)
    return (
        <div>
            {/* <h3>{title}</h3> */}
            {listType ? <ul>{itemMapped}</ul> : <ol>{itemMapped}</ol>}
        </div>
    )
}

export default List