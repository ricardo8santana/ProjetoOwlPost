import { useState } from "react";

let currentTarget = null;

const InputValue = ({id, onDrag}) => {

    // const handleDrag = (e) => {
    //     currentTarget = e.target;
    //     console.log('drag ' + e.target.value);
    //     // console.log('drag ' + d);
    // };

    // const handleDrop = (e) => {
    //     console.log('drop ' + e.target.value + ' t ' + currentTarget);

    //     if (currentTarget !== null) {
    //         e.target.value = currentTarget.value;
    //     }

    //     setTarget(null);
    // }

    return (
        <input id={id} type="text" draggable onDrag={onDrag}/>
    )
}

export default InputValue;