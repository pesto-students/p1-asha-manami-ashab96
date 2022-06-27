import React from 'react';

// import { MdRemoveCircle } from "react-icons/md";
// import { AiFillEdit } from "react-icons/ai";

function ToDoItem (props){
    return(
            <div
              onClick={() => {
                props.onChecked(props.id)
              }}
            >
              <li>
                <p>{props.text}</p>
              </li>
            </div>
    );
}

export default ToDoItem;