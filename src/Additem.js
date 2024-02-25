import React from 'react';
import { IoMdAdd } from "react-icons/io";

const Additem = ({ newitem, setnewitem, handlesubmit }) => {
  return (
    <form className='addForm' onSubmit={(e) => handlesubmit(e)}>
      <input
        type="text"
        id='additem'
        placeholder='Add Your Task'
        autoFocus
        required
        value={newitem}
        onChange={(e) => setnewitem(e.target.value)} 
      />
      <button
        aria-label='add Item'
        type='submit'
      >
        <IoMdAdd />
      </button>
    </form>
  );
};

export default Additem;
