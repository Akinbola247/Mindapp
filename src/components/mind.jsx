import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Mind(props) {

    function onDelete(){
    return props.handleDelete(props.id)
}

  return (
    <div className="mind">
      <h1>{props.mindtitle}</h1>
      <p>{props.mindContent}</p>
      <button onClick = {onDelete} className='delete'> <DeleteIcon/> </button>
    </div>
  );
}

export default Mind;
