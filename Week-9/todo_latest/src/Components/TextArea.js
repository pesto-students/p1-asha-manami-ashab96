import React,{useState} from 'react';

function TextArea (props){
    const [InputItem,setInputItem]  = useState("");

    function handleChange(event){
        console.log(event.target.value);
        const newItem = event.target.value;
        setInputItem(newItem);
        
    }
    function handleSubmit(event){
        props.onAddItem(InputItem);
        setInputItem("");

    }
    return(
        <div className='form'>
            <input typeof='text' placeholder='New Item' value={InputItem} onChange={handleChange}>
            </input>
            <button onClick={handleSubmit}>
              <span>ADD</span>
            </button>
        </div>
    );
}

export default TextArea;