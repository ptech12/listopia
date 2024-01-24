import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
// again prop drilling
const ItemList = (
    /* props */
    {
        items,
        handleDelete,
        handleCheck,
        deleteLogo
    }
    ) => {

        /* Iterate through the items using map */
  return (
    <ul>
    {/* Iterate through the items using map */}
    {
      items.map( item => (
        <li className="item" key={item.id}>
          <input 
            type="checkbox"
            checked={item.checked}
            onChange={() => handleCheck(item.id)} // we use onChange event for input tag
          />

          <label
            style={item.checked ? { textDecoration: 'line-through'} : null }
            onDoubleClick={() => handleCheck(item.id)}
          >
            {item.item}
          </label>

          <FaTrashAlt
            onClick={() => handleDelete(item.id)}
            role="button" 
            tabIndex='0'
          />
        </li>
      ))

    }
</ul>
              
  )
}

export default ItemList