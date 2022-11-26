import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles'
import { register } from '../../services/userService';

const fnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const useremailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const userpasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const phoneRegex = /^[6-9]{1}[0-9]{9}$/;

const useStyles = makeStyles({
    mains: {
        width: '28vw',
        height: '64vh',
        backgroundColor: '#FFFFFF',
        borderC: '#E4E4E4',
        position: 'relative',
        top: '84px',
        left: '680px',
        opacity: '1',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '3',
    },
    main1s: {
        width: '90%',
        height: '85%',
        display: 'flex',
        border: '0px solid red',
        flexDirection: 'column',
        alignItems: 'center'
    },
    mainbuttons: {
        display: 'flex',
        flexDirection: 'row',
        border: '0px solid black',
        width: '100%',
        height: '15%',
        justifyContent: 'space-between',
        position: "relative",
        bottom: '10px',
    },
    loginbuttons: {
        fontSize: "25px !important",
        fontWeight: 'bold !important',
        color: '#0A0102 !important',
        width: '40%',
        font: 'normal normal medium 25px / 33px Roboto',
        letterSpacing: '0px',
        textTransform: 'uppercase',
        opacity: '0.5',
        position: 'relative',
        left: '14px',
    },
    signupbuttons: {
        fontSize: "25px !important",
        fontWeight: 'bold !important',
        color: '#0A0102 !important',
        letterSpacing: '-1px',
        width: '40%',
        position: 'relative',
        right: '24px',
    },
    forms: {
        width: '75%',
        height: '90%',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    nametexts: {
        width: '100%',
    },
    emailtexts: {
        width: '100%',
    },
    texttitles: {
        textAlign: 'left !important',
        fontSize: '10px',
        border: '0px solid red'
    },
    passwordtexts: {
        width: '100%',
    },
    numbertexts: {
        width: '100%',
    },
    signuptexts: {
        width: '100%',
        position: 'relative',
        top: '5px',
        backgroundColor: '#A03037 !important',
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        mains: {
            width: '75vw',
            height: '65vh',
            top: '150px',
            left: '50px',
        },
        loginbuttons: {
            fontSize:"18px !important",
        },
        signupbuttons: {
            fontSize:"18px !important",
        }
    },
    ['@media only screen and (min-width: 481px) and (max-width: 720px)']: {
        mains: {
            width: '55vw',
            height: '65vh',
            top: '150px',
            left: '130px',
        },
        loginbuttons: {
            fontSize:"20px !important",
        },
        signupbuttons: {
            fontSize:"20px !important",
        }
    },
    ['@media only screen and (min-width: 721px) and (max-width: 1024px)']: {
        mains: {
            width: '40vw',
            height: '65vh', 
            top: '150px',
            left: '350px',
        },
    }

})

function SignUp(props) {

    const classes = useStyles()

    const [signupObj, setSignUpObj] = useState({ fullName: "", email: "", password: "", phone: "" })
    const [regexObj, setRegexObj] = useState({ fullnameBorder: false, fullnameHelper: "", usernameBorder: false, usernameHelper: "", passwordBorder: false, passwordHelper: "", phoneBorder: false, phoneHelper: "" })

    const openLoginpage = () => {
        props.listenTosignup1()
    }

    const takeFullname = (event) => {
        setSignUpObj(prevState => ({
            ...prevState,
            fullName: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeUsername = (event) => {
        setSignUpObj(prevState => ({
            ...prevState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }
    const takePassword = (event) => {
        setSignUpObj(prevState => ({
            ...prevState,
            password: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeMobilenumber = (event) => {
        setSignUpObj(prevState => ({
            ...prevState,
            phone: event.target.value
        }))
        console.log(event.target.value)
    }
     
    const submit=()=>{
        let fullnameTest = fnameRegex.test(signupObj.fullName)
        let usernameTest = useremailRegex.test(signupObj.email)
        let passwordTest = userpasswordRegex.test(signupObj.password)
        let mobilenoTest = phoneRegex.test(signupObj.phone)

        if (fullnameTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                fullnameBorder: true,
                fullnameHelper: "Enter valid name"
            }))
        }
        else if (fullnameTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                fullnameBorder: false,
                fullnameHelper: ""
            }))
        }

        if (usernameTest === false) {
            setRegexObj(previousState => ({
                ...previousState,
                usernameBorder: true,
                usernameHelper: "Enter valid email"
            }))
        }
        else if (usernameTest === true) {
            setRegexObj(previousState => ({
                ...previousState,
                usernameBorder: false,
                usernameHelper: ""
            }))
        }

        if (passwordTest === false) {
            setRegexObj(previousState => ({
                ...previousState,
                passwordBorder: true,
                passwordHelper: "Enter valid password"
            }))
        }
        else if (passwordTest === true) {
            setRegexObj(previousState => ({
                ...previousState,
                passwordBorder: false,
                passwordHelper: ""
            }))
        }

        if (mobilenoTest === false) {
            setRegexObj(previousState => ({
                ...previousState,
                phoneBorder: true,
                phoneHelper: "Enter valid number"
            }))
        }
        else if (mobilenoTest === true) {
            setRegexObj(previousState => ({
                ...previousState,
                phoneBorder: false,
                phoneHelper: ""
            }))
        }
        console.log(signupObj)

        if (fullnameTest === true && usernameTest === true && passwordTest === true && mobilenoTest === true){
            register(signupObj)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
            console.log("created")
        }
    }

    return (
        <div>
            <Paper elevation={3} className={classes.mains}>
                <Box className={classes.main1s}>
                    <Box className={classes.mainbuttons}>
                        <Button onClick={openLoginpage} className={classes.loginbuttons}>LOGIN</Button>
                        <Button className={classes.signupbuttons}>SIGNUP</Button>
                    </Box>
                    <Box className={classes.forms}>
                        <Box className={classes.texttitles}><span>Full Name</span>
                            <TextField className={classes.nametexts} onChange={takeFullname} error={regexObj.fullnameBorder} helperText={regexObj.fullnameHelper} variant="outlined" size="small" />
                        </Box>
                        <Box className={classes.texttitles}><span>Email Id</span>
                            <TextField className={classes.emailtexts} onChange={takeUsername} error={regexObj.usernameBorder} helperText={regexObj.usernameHelper} variant="outlined" size="small" />
                        </Box>
                        <Box className={classes.texttitles}><span>Password</span>
                            <TextField className={classes.passwordtexts} onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} variant="outlined" size="small" />
                        </Box>
                        <Box className={classes.texttitles}><span>Mobile Number</span>
                            <TextField className={classes.numbertexts} onChange={takeMobilenumber} error={regexObj.phoneBorder} helperText={regexObj.phoneHelper} variant="outlined" size="small" />
                        </Box>
                        <Box className={classes.texttitles}>
                            <Button className={classes.signuptexts} onClick={submit} variant="contained" >Signup</Button>
                        </Box>
                    </Box>

                </Box>
            </Paper>
        </div>
    )
}

export default SignUp
