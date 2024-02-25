import { useState } from 'react'
import './index.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Additem from './Additem';

function App() {
  const [items, setitems] = useState(JSON.parse(localStorage.getItem('todo_list')) || []);
  const [newitem, setnewitem] = useState('')

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const addNewItem = { id, checked: false, item }
    const listItems = [...items, addNewItem]; //use square bracket to change array
    setitems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  };
  
  
  const handlesubmit = (e) => {
    e.preventDefault();
    if(!newitem) return;
    addItem(newitem)
    setnewitem('');
  }

  const handlechange = (id) => {
    const change = items.map((item) => item.id===id ? {...item, checked:!item.checked} : item)
    setitems(change)
    localStorage.setItem("todo_list", JSON.stringify(change))
  }
  const handledelete = (id) => {
    const Delete = items.filter((item) => item.id !== id )
    setitems(Delete)
    localStorage.setItem("todo_list", JSON.stringify(Delete))
    
  }

  return (
    <div className="App">
      <Header 
        title = "What's Up Today..."
      />
      <Additem 
        newitem = {newitem}
        setnewitem = {setnewitem}
        handlesubmit = {handlesubmit}
      />
      <Content 
        items={items}
        handlechange={handlechange}
        handledelete={handledelete}
      />
      <Footer 
        length={items.length}
      />
    </div>
  );
}

export default App;
