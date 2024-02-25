import React from 'react'
import { PiTrashSimpleFill } from "react-icons/pi";

const Itemslist = ({items, handlechange, handledelete}) => {
  return (
    <ul>
        {items.map((item) => (
          <li className='item' key={item.id}>
            <input 
              type="checkbox" 
              onChange={() => handlechange(item.id)} 
              checked={item.checked} />
            <label
              style = {(item.checked) ? {textDecoration:'line-through'} : null}
              onDoubleClick={() => handlechange(item.id)}
            >{item.item}</label>
            <PiTrashSimpleFill 
              role="button"
              tabIndex="0"
              onClick={() => handledelete(item.id)}
            />
          </li>
        ))}
      </ul>
  )
}

export default Itemslist