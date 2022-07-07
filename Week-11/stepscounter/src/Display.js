import React from 'react';

function resetActionCreator(){
    return {type:"RESET"};
}

function incrementActionCreator(){
    return {type:"INCREMENT"};
}

const  Display = (props) =>{
    const {count,dispatch} = props;
    const handleIncrement = () => {
        dispatch(incrementActionCreator());
    };
    const handleReset = () =>{
        dispatch(resetActionCreator());
    };
    return (
        <div className='Display'>
            <h2>You've Walked {count} steps Today!</h2>
            <button className="btn-color" onClick={handleIncrement}>Add steps</button>
            <button className="btn-normal" onClick={handleReset}>Reset Steps</button>
        </div>
    );
};


export default Display;