import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import './SignUp.css'
import { signUp } from '../../services/UserService';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const fnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const confirmRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


const useStyles = makeStyles({
    box1: {
        display: 'flex',
        flexDirection: 'row',
        width: '50vw',
        height: '90vh',
        border: '1px solid rgb(182, 180, 180)',
        position: 'relative',
        top: 50,
        left: 400,
        borderRadius: 10
    },
    childBoxOne: {
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    logoID1: {
        width: 100,
        height: 30,
        position: 'relative',
        right: 150,
        bottom: 80
    },
    h2TagID1: {
        position: 'relative',
        right: 50,
        bottom: 80,
        fontWeight: 400
    },
    subChildBox1: {
        display: 'flex',
        flexDirection: 'row',
        width: 400,
        height: 40,
        justifyContent: 'space-between',
        position: 'relative',
        bottom: 70
    },
    outlinedbasic: {
        width: 190,
        height: 20,
    },

    textField: {
        width: 400,
        height: 9,
        position: 'relative',
        bottom: 40
    },
    btnID: {
        font: 'small-caps',
        position: 'relative',
        top: 15,
        right: 40
    },
    subChildBox2: {
        display: 'flex',
        flexDirection: 'row',
        width: 400,
        height: 40,
        justifyContent: 'space-between',
        position: 'relative',
        top: 30
    },
    paraID: {
        textAlign: 'left',
        fontSize: 'small',
        position: 'relative',
        top: 30
    },
    innerBox: {
        display: 'flex',
        flexDirection: 'row',
        width: '87%',
        height: ' 5%',
        justifyContent: 'space-between',
        position: 'relative',
        top: 70
    },
    childBox2: {
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    checkBoxID: {
        position: 'relative',
        right: 120,
        top: 25
    },
    imgID:{
        width: 250
    },
    h2TagID2:{
        fontWeight: 300,
    fontSize: 'x-large',
    textAlign: 'center'
    }
})

function SignUp() {

    const [signInObj, setSignInObj] = React.useState({ firstName: "", lastName: "", email: "", password: "", service: "advance" })
    const [regexObj, setRegexObj] = React.useState({
        fnameBorder: false, fnameHelper: "", lnameBorder: false, lnameHelper: "",
        emailBorder: false, emailHelper: "You can use letter, numbers & periods",
        passwordBorder: false, passwordHelper: "", ConfirmBorder: false, ConfirmHelper: ""
    })

    const classes = useStyles();

    const takeFname = (Event) => {
        setSignInObj(prevState => ({ ...prevState, firstName: Event.target.value }))
    }

    const takeLname = (Event) => {
        setSignInObj(prevState => ({ ...prevState, lastName: Event.target.value }))
    }

    const takeEmail = (Event) => {
        setSignInObj(prevState => ({ ...prevState, email: Event.target.value }))
    }

    const takePassword = (Event) => {
        setSignInObj(prevState => ({ ...prevState, password: Event.target.value }))
    }

    // const takeConfirm = (Event) =>{
    //     setSignInObj(prevState => ({...prevState, confirm : Event.target.value }))
    // }

    const submit = () => {
        let fnameTest = fnameRegex.test(signInObj.firstName)
        let lnameTest = lnameRegex.test(signInObj.lastName)
        let emailTest = emailRegex.test(signInObj.email)
        let passwordTest = passwordRegex.test(signInObj.password)
        // let confirmTest = confirmRegex.test(signInObj.service)
        // console.log(fnameTest)

        if (fnameTest === false) {
            setRegexObj(prevState => ({ ...prevState, fnameBorder: true, fnameHelper: "Enter correct first name" }))
        } else if (fnameTest === true) {
            setRegexObj(prevState => ({ ...prevState, fnameBorder: false, fnameHelper: "" }))
        }

        if (lnameTest === false) {
            setRegexObj(prevState => ({ ...prevState, lnameBorder: true, lnameHelper: "Enter correct last name" }))
        } else if (lnameTest === true) {
            setRegexObj(prevState => ({ ...prevState, lnameBorder: false, lnameHelper: "" }))
        }

        if (emailTest === false) {
            setRegexObj(prevState => ({ ...prevState, emailBorder: true, emailHelper: "Enter correct email" }))
        } else if (emailTest === true) {
            setRegexObj(prevState => ({ ...prevState, emailBorder: false, emailHelper: "You can use letter, numbers & periods" }))
        }

        if (passwordTest === false) {
            setRegexObj(prevState => ({ ...prevState, passwordBorder: true, passwordHelper: "use 8 character or more " }))
        } else if (passwordTest === true) {
            setRegexObj(prevState => ({ ...prevState, passwordBorder: false, passwordHelper: "" }))
        }

        // if(confirmTest === false){
        //     setRegexObj(prevState =>({...prevState, ConfirmBorder:true, ConfirmHelper:"confirm your password "}))
        // }else if(confirmTest === true){
        //     setRegexObj(prevState =>({...prevState, ConfirmBorder:false, ConfirmHelper:""}))
        // }

        if (fnameTest === true && lnameTest === true && emailTest === true && passwordTest === true) {
            signUp(signInObj).then((response) => { console.log(response); localStorage.setItem('token', response.data.id) })
                .catch((error) => { console.log(error) })
        }

    }

    return (
        <Box className={classes.box1}>

            <Box className={classes.childBoxOne}>
                <img className={classes.logoID1} src="./Images/logo1.png" alt="" />
                <h2 className={classes.h2TagID1}>Create your Google Account</h2>

                <Box className={classes.subChildBox1}>
                    <TextField className={classes.outlinedbasic} error={regexObj.fnameBorder} helperText={regexObj.fnameHelper} onChange={takeFname} label="First Name" variant="outlined" size="small" />
                    <TextField className={classes.outlinedbasic} error={regexObj.lnameBorder} helperText={regexObj.lnameHelper} onChange={takeLname} label="Last Name" variant="outlined" size="small" />
                </Box>

                <TextField
                    className={classes.textField}
                    error={regexObj.emailBorder}
                    helperText={regexObj.emailHelper}
                    onChange={takeEmail}
                    label="UserName"
                    size='small'
                />

                <Button className={classes.btnID} variant="text">Use my current email address instead</Button>

                <Box className={classes.subChildBox2}>
                    <TextField className={classes.outlinedbasic} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} onChange={takePassword} label="Password" variant="outlined" size="small" />
                    {/* <TextField id="outlined-basic" error={regexObj.ConfirmBorder} helperText={regexObj.ConfirmHelper} onChange={takeConfirm} label="Confirm" variant="outlined"   size="small" /> */}
                    <TextField className={classes.outlinedbasic} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} onChange={takePassword} label="Password" variant="outlined" size="small" />
                </Box>

                <p className={classes.paraID}>
                    Use 8 or more characters with a mix of letters, numbers & symbols
                </p>

                <FormControlLabel className={classes.checkBoxID} control={<Checkbox defaultChecked />} label="Show password" />

                <Box className={classes.innerBox}>
                    <Button variant="text">Sign in instead</Button>
                    <Button variant="contained" onClick={submit}>Next</Button>

                </Box>


            </Box>
            <Box className={classes.childBox2}>
                <img className={classes.imgID} src="./Images/logo3.jpg" alt="" />
                <h2 className={classes.h2TagID2}>One account. All of Google working for you.</h2>
            </Box >
        </Box>
    )
}

export default SignUp