import React from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { border } from '@mui/system';
import PushPinIcon from '@mui/icons-material/PushPin';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageIcon from '@mui/icons-material/Image';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import Button from '@mui/material/Button';
import ColorPopper from '../colorpopper/ColorPopper';
import IconButton from '@mui/material/IconButton';
import { addNote } from '../../services/DataService'
import InputBase from '@mui/material/InputBase';
import ClickAwayListener from '@mui/material/ClickAwayListener';




const useStyles = makeStyles({
    mainBox: {
        display: 'flex',
        width: 610,
        height: 152,
        position: 'relative',
        left: 600,
        bottom: 20,
        borderRadius: 10,
    },
    paperCss: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid lightGrey',
        width: 610,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12

    },
    outerBorder: {
        display: 'flex',
        flexDirection: 'column',
        width: 580,
        height: 140,
    },

    innerBox: {
        display: 'flex',
        flexDirection: 'row',
        width: 580,
        height: 46,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputInnerBox: {
        width: 560,
        height: 45,
        border: 'none',
    },
    innerIconBox: {
        display: 'flex',
        flexDirection: 'row',
        width: 410,
        height: 46,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    innerButtonBox: {
        display: 'flex',
        width: 100,
        height: 46,
        justifyContent: 'space-between',
        alignItems: 'center'

    }

})

function TakeNoteTwoMUI(props) {

    const classes = useStyles();

    const [note, setNote] = React.useState({ title: '', description: '', color: '', isArchived: false })


    const takeTitle = (e) => {
        setNote(prevState => ({ ...prevState, title: e.target.value }))
    }

    const takeDecs = (e) => {
        setNote(prevState => ({ ...prevState, description: e.target.value }))
    }

    const submit = () => {
        console.log(note)
        addNote(note).then((response) => { console.log(response); props.accessTakeNoteTwo() })
            .catch((error) => { console.log(error) })
        props.listenToTakenoteTwo()
    }

    const takeArchiveChange = () => {

        setNote(prevState => ({ ...prevState, isArchived: true }))
    }

    const listenToColorPopper = (color) => {
        setNote(prevState => ({ ...prevState, color: color }))
    }

    const handleClickAway = () => {
        props.listenToTakenoteTwo()
    };
    return (
        <ClickAwayListener onClickAway={handleClickAway}>

            <Box className={classes.mainBox} >
                <Paper className={classes.paperCss} elevation={3} style={{ backgroundColor: note.color }} >
                    <Box className={classes.outerBorder}>
                        <Box className={classes.innerBox}>
                            <InputBase className={classes.inputInnerBox} type="text" placeholder="Title" onChange={takeTitle} style={{ backgroundColor: note.color }} ></InputBase>
                            <PushPinIcon />
                        </Box>
                        <Box className={classes.innerBox}>
                            <InputBase className={classes.inputInnerBox} type="text" placeholder="Take a Note..." onChange={takeDecs} style={{ backgroundColor: note.color }} ></InputBase>
                        </Box>
                        <Box className={classes.innerBox}>
                            <Box className={classes.innerIconBox}>
                                <AddAlertIcon />
                                <PersonAddAltIcon />
                                <ColorPopper listenToColorPopper={listenToColorPopper} action='create' />
                                <ImageIcon />
                                <ArchiveIcon onClick={takeArchiveChange} />
                                <MoreVertIcon />
                                <UndoIcon />
                                <RedoIcon />
                            </Box>
                            <Box className={classes.innerButtonBox}>
                                <IconButton
                                    size="small"
                                    edge="start"
                                    color="inherit"
                                    aria-label="open drawer"
                                >
                                    <Button variant="text" onClick={submit} >Close</Button>
                                </IconButton>

                            </Box>
                        </Box>
                    </Box>

                </Paper>
            </Box>
        </ClickAwayListener>

    )
}

export default TakeNoteTwoMUI