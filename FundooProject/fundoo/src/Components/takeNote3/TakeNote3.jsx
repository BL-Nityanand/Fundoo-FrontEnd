import React, { useState } from 'react'
import './TakeNote3.css'
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageIcon from '@mui/icons-material/Image';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PushPinIcon from '@mui/icons-material/PushPin';
import ColorPopper from '../colorpopper/ColorPopper';
import { changeColorNotes } from '../../services/DataService';
import { color } from '@mui/system';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { updateNotes } from '../../services/DataService';
import { updateArchivedAPI } from '../../services/DataService';
import InputBase from '@mui/material/InputBase';






const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '1px solid lightGrey',
  boxShadow: 24,  
  p: 4,
};

function TakeNote3(props) {

  const [noteObj, setNoteObj] = useState({ noteId: '', title: '', description: '' })

  const updateArchive = (id) => {
    console.log(id,"id abc")
    let dataNode = { noteIdList: [id],
       isArchived: true }

      updateArchivedAPI(dataNode).then((response) => { console.log(response); })
      .catch((error) => { console.log(error) }) 

  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = (noteObj) => {
    setOpen(true);
    setNoteObj({ noteId: noteObj.id, title: noteObj.title, description: noteObj.description })

  }
  const handleClose = () => setOpen(false);

  const takeTitle = (e) => {
    console.log(noteObj.title)
    setNoteObj(prevState => ({ ...prevState, title: e.target.value }))
  }

  const takeDecs = (e) => {
    setNoteObj(prevState => ({ ...prevState, description: e.target.value }))
  }

  const submit = () => {
    console.log(noteObj)
    updateNotes(noteObj).then((response) => { console.log(response); })
      .catch((error) => { console.log(error) })
      
  }

  return (
    <div className='TK4_main' style={{ backgroundColor: props.notes.color }}>
      <div className='TK4_main_main'>
        <div className="sub_TK4_main_1">
          <div className="sub_TK4_main_Sub1">
            <div className="sub_TK4_main_Sub1_1" onClick={() => handleOpen(props.notes)}>{props.notes.title}</div>
            <div className="sub_TK4_main_Sub1_1" onClick={() => handleOpen(props.notes)}>{props.notes.description}</div>
          </div>
          <div className="sub_TK4_main_Sub2"><PushPinIcon /></div>

          {/* <p>{props.notes.title} <br />
                      {props.notes.description}
                </p> 
                <PushPinIcon/> */}
        </div>
        <div className="sub_TK4_main_2">
          {/* <div className='time_div'>
                    <AccessTimeIcon fontSize='small'></AccessTimeIcon>
                    <p id='time_div_paraID'>Today,7:00PM</p>
                    <h12>Today,7:00PM</h12>
                </div> */}
        </div>
        <div className="sub_TK4_main_3">
          <AddAlertIcon fontSize='small'></AddAlertIcon>
          <PersonAddAltIcon fontSize='small'></PersonAddAltIcon>
          {/* <ColorLensIcon fontSize='small'></ColorLensIcon> */}
          {/* <ColorPopper action='update' changeBackground={changeBackground}/> */}
          <ColorPopper action='update' id={props.notes.id} />
          <ImageIcon fontSize='small'></ImageIcon>
          <ArchiveIcon onClick={()=>updateArchive(props.notes.id)} fontSize='small'></ArchiveIcon>
          <MoreVertIcon fontSize='small'></MoreVertIcon>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='modalMain' style={{ backgroundColor: props.notes.color }}>

          <div className='modalbox1'>
            <div>
              <div onClick={() => handleOpen(props.notes)}>
                <FormControl className='inputClass1' sx={{ width: '38ch' }}>
                  <InputBase defaultValue={noteObj.title} type='string' onChange={takeTitle} />
                </FormControl>
              </div>
              <div onClick={() => handleOpen(props.notes)}>
                <FormControl className='inputClass1' sx={{ width: '38ch' }}>
                  <InputBase defaultValue={noteObj.description} type='string' onChange={takeDecs} />
                </FormControl>
              </div>

            </div>
            <div ><PushPinIcon /></div>
          </div>

          <div className='modalBox2'>
            <div className='subModalBox2'>
              <AddAlertIcon fontSize='small'></AddAlertIcon>
              <PersonAddAltIcon fontSize='small'></PersonAddAltIcon>
              <ColorPopper action='update' id={props.notes.id} />
              <ImageIcon fontSize='small'></ImageIcon>
              <ArchiveIcon onClick={updateArchive} fontSize='small'></ArchiveIcon>
              <MoreVertIcon fontSize='small'></MoreVertIcon>
            </div>

            <div className='subModalBox3'>
              {/* <h4>Close</h4> */}
              <Button variant="text" id='btn_id' onClick={submit}>Close</Button>
            </div>
          </div>

        </Box>



      </Modal>
    </div>
  )
}

export default TakeNote3