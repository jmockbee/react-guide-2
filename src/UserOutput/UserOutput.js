import React from 'react';

import './UserOutput.css';


const userOutput = (props) => {

    return (
        <div  className= "UserOutput">
            <p> Username: {props.userName} </p>
            <p> hopefully will be over written soon  </p>

        </div>

    );


};

export default userOutput;

