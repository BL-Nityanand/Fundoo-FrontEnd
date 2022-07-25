import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageIcon from '@mui/icons-material/Image';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PushPinIcon from '@mui/icons-material/PushPin';
import ColorPopper from '../../Components/colorpopper/ColorPopper';
import { updateArchivedAPI } from '../../services/DataService';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import { updateNotes } from '../../services/DataService';


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
  


export default function TakeNoteThreeGrid(props) {

    const [noteObj, setNoteObj] = useState({ noteId: '', title: '', description: '' })

    const updateArchive = (id) => {
        console.log(id, "id abc")
        let dataNode = {
            noteIdList: [id],
            isArchived: true
        }

        updateArchivedAPI(dataNode).then((response) => { console.log(response); props.listenToTakeNoteThree() })
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
      updateNotes(noteObj).then((response) => { props.listenToTakeNoteThree() })
        .catch((error) => { console.log(error) })
        props.listenToTakeNoteThreeModal()
    }

    const listenToColorUpdate=()=>{
        props.listenToTakeNoteThree()
    }


    return (
        <Card sx={{ width: 250, height: 120,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}style={{ backgroundColor: props.notes.color }}>
            {/* <CardActionArea> */}
            <CardContent sx={{  display: 'flex', width: 270, height: 80, justifyContent: 'space-between' }}>
                <CardContent>
                    <Typography gutterBottom variant="body2" component="div" onClick={() => handleOpen(props.notes)} style={{ display: 'flex'}} >
                        {props.notes.title}
                    </Typography>
                    <Typography variant="h8" color="text.secondary" onClick={() => handleOpen(props.notes)} style={{ display: 'flex' }}>
                        {props.notes.description}
                    </Typography>
                </CardContent>
                <CardContent>
                    <IconButton
                        size="small"
                        aria-label="show more"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <PushPinIcon />
                    </IconButton>

                </CardContent>
            </CardContent>

            {/* </CardActionArea> */}
            <CardActions>
                <IconButton
                    size="small"
                    aria-label="show more"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AddAlertIcon fontSize='small'></AddAlertIcon>
                </IconButton>
                <IconButton
                    size="small"
                    aria-label="show more"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <PersonAddAltIcon fontSize='small'></PersonAddAltIcon>
                </IconButton>
                <IconButton
                    size="small"
                    aria-label="show more"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <ColorPopper action='update' id={props.notes.id} listenToColorUpdate={listenToColorUpdate} />
                </IconButton>
                <IconButton
                    size="small"
                    aria-label="show more"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <ImageIcon fontSize='small'></ImageIcon>
                </IconButton>
                <IconButton
                    size="small"
                    aria-label="show more"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <ArchiveIcon fontSize='small' onClick={() => updateArchive(props.notes.id)}></ArchiveIcon>
                </IconButton>
                <IconButton
                    size="small"
                    aria-label="show more"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <MoreVertIcon fontSize='small'></MoreVertIcon>
                </IconButton>
            </CardActions>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='modalMain' style={{ backgroundColor: props.notes.color }}>

                    <Box className='modalbox1'>
                        <Box>
                            <Box onClick={() => handleOpen(props.notes)}>
                                <FormControl className='inputClass1' sx={{ width: '38ch' }}>
                                    <InputBase defaultValue={noteObj.title} type='string' onChange={takeTitle} />
                                </FormControl>
                            </Box>
                            <Box onClick={() => handleOpen(props.notes)}>
                                <FormControl className='inputClass1' sx={{ width: '38ch' }}>
                                    <InputBase defaultValue={noteObj.description} type='string' onChange={takeDecs} />
                                </FormControl>
                            </Box>

                        </Box>
                        <Box ><PushPinIcon /></Box>
                    </Box>

                    <Box className='modalBox2'>
                        <Box className='subModalBox2'>
                            <AddAlertIcon fontSize='small'></AddAlertIcon>
                            <PersonAddAltIcon fontSize='small'></PersonAddAltIcon>
                            <ColorPopper action='update' id={props.notes.id} />
                            <ImageIcon fontSize='small'></ImageIcon>
                            <ArchiveIcon onClick={updateArchive} fontSize='small'></ArchiveIcon>
                            <MoreVertIcon fontSize='small'></MoreVertIcon>
                        </Box>

                        <Box className='subModalBox3'>
                            {/* <h4>Close</h4> */}
                            <Button variant="text" id='btn_id' onClick={submit} >Close</Button>
                        </Box>
                    </Box>

                </Box>



            </Modal>
        </Card>
    );
}
