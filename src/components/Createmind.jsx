import React, {useState} from 'react'
import Dialog from '@mui/material/Dialog';

function CreateMind(props) {
   const [closeDialog, setCloseDialog] = useState(true)
    const [mind, setMind] = useState({
        title : '',
        content: ''
    }) 
    function handleChange(event){
     const {name, value} = event.target
     setMind((prevValue)=>{
        return {
            ...prevValue,
            [name] : value
        }
     })
    }

    function handleButtonClick(event){
        props.sendMind(mind)
        setMind({
            title: '',
            content: ''
          });
          setCloseDialog(props.cancelClick(false))
        event.preventDefault()
    }
    function getDialogCanceled(event){
        setCloseDialog(props.anotherCancel(false))
        event.preventDefault()
    }

  return (
    <Dialog open={props.clicked} onClose={closeDialog}>
    <div className='controlCreateMind' >
    <form className='createMind'>
    <h1>WRITE YOUR THOUGHTS</h1>
     <input
            name="title"
            onChange={handleChange}
            value={mind.title}
            placeholder="Title"
          />
    <textarea
          name="content"
          onChange={handleChange}
          value={mind.content}
          placeholder="Take a note..."
          rows= '3'
        />
        <button onClick={handleButtonClick} className='upload btn btn-primary btn-lg submitButton'> Upload</button>
        <button onClick={getDialogCanceled} className='upload btn btn-primary btn-lg submitButton'>Cancel</button>
    </form>
    </div>
</Dialog>
  );
}

export default CreateMind;

