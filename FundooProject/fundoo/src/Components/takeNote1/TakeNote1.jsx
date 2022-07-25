import React from 'react'
import './TakeNote1.css'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BrushIcon from '@mui/icons-material/Brush';
import ImageIcon from '@mui/icons-material/Image';

function TakeNote1(props) {

  const accessTakeNoteOne=()=>{
    props.listenToTakenoteOne()
  }
  return (
    <div className='TK1_main' onClick={accessTakeNoteOne}>
        <h4 id='TK1_main_h3ID'>Take a Note...</h4>
    
        <div className='sub_TK1_main'>
            <CheckBoxIcon/>
            <BrushIcon/>
            <ImageIcon/>
        </div>
    </div>
  )
}

export default TakeNote1