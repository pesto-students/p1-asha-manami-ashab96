import React from 'react';
import {useState} from 'react';

import ToDoItem from './Components/ToDoItem';
import TextArea from './Components/TextArea';



function App() {
  const [items,setItems] = useState([]);
  function addItem(newItem){
    if(!newItem){
      return;
    }
    setItems((prevItems) => {
    return [...prevItems,newItem];
    });
    console.log(items);
  }

  

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className='container'>
       <div className = "heading">
          <h1>To-Do List </h1>
       </div> 
       <TextArea onAddItem ={addItem}/>  
       <div>
       <ul>
          {items.map((todoitem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoitem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
       </div>
    </div>
    
    
  );
}

export default App;
