import React from 'react'
import './TakeNote2.css'
import PushPinIcon from '@mui/icons-material/PushPin';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageIcon from '@mui/icons-material/Image';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import Button from '@mui/material/Button';
import { addNote } from '../../services/DataService'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Box, height } from '@mui/system';
import InputBase from '@mui/material/InputBase';
import ColorPopper from '../colorpopper/ColorPopper';


function TakeNote2(props) {
  const [note, setNote] = React.useState({ title: '', description: '',color:'',isArchived:false })


  const takeTitle = (e) => {
    setNote(prevState => ({ ...prevState, title: e.target.value }))
  }

  const takeDecs = (e) => {
    setNote(prevState => ({ ...prevState, description: e.target.value }))
  }

  const accessTakeNoteTwo=()=>{
    props.listenToTakenoteTwo()
  }
  const submit = () => {
    console.log(note)
    addNote(note).then((response) => { console.log(response); props.accessTakeNoteTwo()})
      .catch((error) => { console.log(error) })
  }

  const takeArchiveChange=()=>{

      setNote(prevState => ({...prevState, isArchived:true}))
  }

  const listenToColorPopper=(color)=>{
    setNote(prevState => ({ ...prevState, color: color }))
  }
  return (
    <div className='takeNote3Main' style={{backgroundColor:note.color}}>
      <div className='TK3_main'>
        <div className="sub_TK3_main1">
          <FormControl className='inputClass1' sx={{ width: '67ch'}}>
            <OutlinedInput placeholder="Title"  type='string' onChange={takeTitle}/>
          </FormControl>

          {/* <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Title"
            inputProps={{ 'aria-label': 'Title' }}
            onchange={takeTitle}
          /> */}
          <PushPinIcon />
        </div>
        <div className="sub_TK3_main2">
          <FormControl className='inputClass1' sx={{ width: '67ch'}}>
            <OutlinedInput placeholder="Take a note.." type='string' onChange={takeDecs} />
          </FormControl>
          
          {/* <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Take a note.."
            inputProps={{ 'aria-label': 'Take note' }}
            onchange={takeDecs}
          /> */}
        </div>
        <div className="sub_TK3_main3">
          <div className="sub_TK3_main3_1">
            <AddAlertIcon />
            <PersonAddAltIcon />
            {/* <ColorLensIcon /> */}
            <ColorPopper listenToColorPopper={listenToColorPopper} action= 'create'/>
            <ImageIcon />
            <ArchiveIcon  onClick={takeArchiveChange}/>
            <MoreVertIcon />
            <UndoIcon />
            <RedoIcon />
          </div>
          <div className="sub_TK3_main3_2">
            {/* <h4>Close</h4> */}
            <Button variant="text" id='btn_id' onClick={submit}>Close</Button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default TakeNote2