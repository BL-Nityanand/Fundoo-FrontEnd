import React from 'react'
// import './TakeNote1.css'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BrushIcon from '@mui/icons-material/Brush';
import ImageIcon from '@mui/icons-material/Image';
import Paper from '@mui/material/Paper';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';


const useStyles = makeStyles({

    mainBox:{
        display:'flex',
        width: 610,
        height: 50 ,
        position:'relative',
        left:600,
        bottom:20,
        borderRadius:12,

    },
    paperCss:{
        display:'flex',
        flexDirection:'row',
        border: '1px solid lightGrey',
        width: 610,
        height: 48,
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:12

    },

    IconBoxCss:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:150,
        position:'relative',
        right:20,
    },
    inputCss:{
        border:'none',
        position:'relative',
        left:20,
        fontWeight:500
    }
})

function TakeNoteOne(props) {

     const classes = useStyles();

     const accessTakeNoteOne=()=>{
        props.listenToTakenoteOne()
      }
    return (
        <Box className={classes.mainBox} onClick={accessTakeNoteOne}>
            <Paper className={classes.paperCss} elevation={3} >
                <Box >
                    <h4 className={classes.inputCss}>Take a note...</h4>
                </Box>
                <Box className={classes.IconBoxCss}>
                    <CheckBoxIcon />
                    <BrushIcon />
                    <ImageIcon />
                </Box>
            </Paper>
        </Box>
    );
}

export default TakeNoteOne