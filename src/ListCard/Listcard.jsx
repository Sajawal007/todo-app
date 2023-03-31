import React, { useState } from "react";
import './ListCard.css'
const Listcard = (props) => {

    return (<>
        <div className="card-outer">
            <p>{props.text}</p>
            <img src="./trash.svg" width="30rem" height="30rem" onClick={()=>props.deleteNote(props.id)}/>
            <div className="controls">
                <img src="./triangle.svg" width="15rem" height="15rem" onClick={()=>props.increment(props.id)}/>
                <p>{props.priority}</p>
                <img style={{ rotate: "180deg" }} src="./triangle.svg" width="15rem" height="15rem" 
                onClick={()=>props.decrement(props.id)}
                />
            </div>
        </div>
    </>);
}

export default Listcard;