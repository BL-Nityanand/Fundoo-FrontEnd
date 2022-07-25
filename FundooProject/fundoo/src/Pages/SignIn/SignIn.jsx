import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import './SignIn.css'
import { login } from '../../services/UserService';
import SignUp from '../SignUp/SignUp';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';


const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


const useStyles = makeStyles({


    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '29vw',
        height: '73vh',
        border: '1px solid rgb(192, 189, 189)',
        color: '#202124',
        position: 'relative',
        left: 600,
        top: 80,
        borderRadius: 10,
    },

    logoID: {
        position: 'relative',
        left: 0,
        width: 100,
        height: 30,
        top: 0
    },

    h2TagID: {
        color: 'rgb(54, 51, 51)',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 400,
        position: 'relative',
        left: 0,
        top: 0,
    },

    h4TagID: {
        position: 'relative',
        bottom: 30,
        fontWeight: 400
    },

    subBox: {
        display: 'flex',
        flexDirection: 'column',
        width: '85%',
        height: '34%',
        position: 'relative',
        bottom: 35,
    },
    h4TagID2: {
        position: 'relative',
        right: 136,
        bottom: 15,
        // top:20,
        color: 'rgb(4, 149, 239)',
        fontWeight: 500
    },
    paraId: {
        position: 'relative',
        bottom: 10,
        fontSize: 14,
        textAlign: 'left'
    },
    inner_Box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '87%',
        height: '8%'
    },
    // textFieldCss:{
    //     width: 350,
    //     height: 17
    // }


});

function SignIn() {

    const [signInObj, setSignInObj] = React.useState({ email: "", password: "" })
    const [regexObj, setRegexObj] = React.useState({
        emailBorder: false, emailHelper: "",
        passwordBorder: false, passwordHelper: "", ConfirmBorder: false, ConfirmHelper: ""
    })

    const classes = useStyles();
    const takeEmail = (Event) => {
        setSignInObj(prevState => ({ ...prevState, email: Event.target.value }))
    }

    const takePassword = (Event) => {
        setSignInObj(prevState => ({ ...prevState, password: Event.target.value }))
    }

    const submit = () => {
        let emailTest = emailRegex.test(signInObj.email)
        let passwordTest = passwordRegex.test(signInObj.password)

        if (emailTest === false) {
            setRegexObj(prevState => ({ ...prevState, emailBorder: true, emailHelper: "Enter correct email" }))
        } else if (emailTest === true) {
            setRegexObj(prevState => ({ ...prevState, emailBorder: false, emailHelper: "You can use letter, numbers & periods" }))
        }

        if (passwordTest === false) {
            setRegexObj(prevState => ({ ...prevState, passwordBorder: true, passwordHelper: "use 8 character or more for password " }))
        } else if (passwordTest === true) {
            setRegexObj(prevState => ({ ...prevState, passwordBorder: false, passwordHelper: "" }))
        }

        if (emailTest === true && passwordTest === true) {
            login(signInObj).then((response) => { console.log(response); localStorage.setItem('token', response.data.id) })
                .catch((error) => { console.log(error) })
        }
    }

    return (

        <Box className={classes.box}>
            <img className={classes.logoID} src="./Images/logo1.png" alt="" />
            <h2 className={classes.h2TagID}>Sign in</h2>
            <h4 className={classes.h4TagID}>Use your Google Account</h4>

            <Box className={classes.subBox}>
                <TextField className={classes.textFieldCss} error={regexObj.emailBorder}
                    helperText={regexObj.emailHelper}
                    onChange={takeEmail} label="Email or Phone"
                    variant="outlined" />
                <h4 className={classes.h4TagID2}>Forgot email?</h4>
                <TextField className={classes.textFieldCss} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} onChange={takePassword} label="password" variant="outlined" />
            </Box>

            <p className={classes.paraId}>
                Not your computer? Use Guest mode to sign in privately. <br /> <a href="">Learn more</a>
            </p>

            <Box className={classes.inner_Box}>
                <Button variant="text" href={<SignUp />}>Create account</Button>
                <Button variant="contained" onClick={submit}>Next</Button>
                

            </Box>
        </Box>


    )
}

export default SignIn