import React from 'react'
import Itemslist from './Itemslist'
const Content = ({items, handlechange, handledelete}) => {
  
  return (
    <main>
      {(items.length) ? ( 
        <Itemslist
          items={items}
          handlechange={handlechange}
          handledelete={handledelete}
        />
      ) : (
        <p>YOUR LIST IS EMPTY</p>
      )
    }
    </main>
  )
}

export default Content