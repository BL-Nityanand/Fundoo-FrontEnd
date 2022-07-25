import React from 'react'
// import { makeStyles } from '@mui/material';
// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from '@mui/styles';
// import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    
    btn :{
        backgroundColor:'red'
    }


});


function Xyz() {
    const classes = useStyles();
  return (
    <div>
        <h1>hello</h1>
        <input type="text" />
        <button  >click</button>
    </div>
  )
}

export default Xyz