import { useState } from "react";

import InputValue from "./InputValue";
import DropZone from "./DropZone";

const DragNDropZone = () => {
    const [drop, setDrop] = useState(null);

    const handleDrag = (e) => {
        setDrop(e.target);
        console.log('drag ' + e.target.value);
    };
    
    const handleDrop = (e) => {
        console.log('drop ' + e.target.value + ' t ' + drop);

        if (drop !== null) {
            e.target.value = drop.value;
        }

        setDrop(null);
    };

    return (
        <>
            <div className='page-inputs'>
                <InputValue id={0} onDrag={handleDrag}/>
                <InputValue id={1} onDrag={handleDrag}/>
                <InputValue id={2} onDrag={handleDrag}/>
                <InputValue id={3} onDrag={handleDrag}/>

            </div>

            <DropZone onDrop={handleDrop}/>
        </>
    )
}

export default DragNDropZone;