import React from 'react';


const userInput = (props) => {
   // this style in line so only goes with the input 
    const inputStyle = {
        border: '8px solid red'
    };

    return <input 
        type="text" 
        style={inputStyle}
        onChange={props.changed} 
        value={props.currentName} />;
};

export default userInput;
