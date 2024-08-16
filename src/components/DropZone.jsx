const DropZone = ({onDrop}) => {
    return (
        <input className="dropZone" type="text" onDrop={onDrop}/>
    )
}

export default DropZone;