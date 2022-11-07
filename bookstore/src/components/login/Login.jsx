import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Divider } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react';
import { login } from '../../services/userService';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyles = makeStyles({
  main: {
    width: '28vw',
    height: '64vh',
    backgroundColor: '#FFFFFF',
    position: 'relative',
    top: '84px',
    left: '680px',
    zIndex: 1,
    opacity: '1',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '3',
  },
  main1: {
    width: '90%',
    height: '85%',
    display: 'flex',
    border: '0px solid red',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainbutton: {
    display: 'flex',
    flexDirection: 'row',
    border: '0px solid black',
    width: '100%',
    height: '15%',
    justifyContent: 'space-between',
    position: "relative",
    bottom: '10px',
  },
  loginbutton: {
    fontSize: "25px !important",
    fontWeight: 'bold !important',
    color: '#0A0102 !important',
    width: '40%',
    font: 'normal normal medium 25px / 33px Roboto',
    letterSpacing: '0px',
    textTransform: 'uppercase',
    position: 'relative',
    left: '14px',
  },
  signupbutton: {
    fontSize: "25px !important",
    fontWeight: 'bold !important',
    color: '#0A0102 !important',
    letterSpacing: '-1px',
    width: '40%',
    opacity: '0.5',
    position: 'relative',
    right: '24px',
  },
  form: {
    width: '75%',
    height: '75%',
    border: '0px solid red',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  emailtext: {
    width: '100%',
  },
  passwordtext: {
    width: '100%',
  },
  texttitle: {
    textAlign: 'left !important',
    fontSize: '10px',
    border: '0px solid red'
  },
  texttitle1: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    color: '#0A0102 !important',
    fontSize: '8px !important',
    border: '0px solid purple',
    position: "relative",
    left: '85px',
    opacity: '0.7',
  },

  loginbutton1: {
    width: '100%',
    backgroundColor: '#A03037 !important'
  },
  ortext: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    fontWeight: 'bold',
    position: 'relative',
    top: '10px',
  },
  fbg: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    top: '20px',
  },
  facebookc: {
    width: '48%',
  },
  facebookb: {
    fontWeight: '500 !important',
    textTransform: 'capitalize !important',
    width: '100%'
  },
  googlec: {
    width: '48%',
  },
  googleb: {
    color: 'black !important',
    fontWeight: '500 !important',
    textTransform: 'capitalize !important',
  }

})

function Login(props) {

  const classes = useStyles()

  const [loginObj, setLoginObj] = useState({ email: '', password: '' })
  const [regexObj, setRegexObj] = useState({ emailBorder: false, emailHelper: '', passwordBorder: false, passwordHelper: '' })

  //1
  const openSignup = () => {
    props.listenTologin1()
  }

  const takeEmail = (event) => {
    setLoginObj(prevState => ({
      ...prevState,
      email: event.target.value
    }))
    console.log(event.target.value)
  }

  const takePassword = (event) => {
    setLoginObj(prevState => ({
      ...prevState,
      password: event.target.value
    }))
    console.log(event.target.value)
  }

  const submit = () => {
    let emailTest = emailRegex.test(loginObj.email)
    let passwordTest = passwordRegex.test(loginObj.password)

    if (emailTest===false){
      setRegexObj(prevState=> ({
        ...prevState,
        emailBorder:'true',
        emailHelper:'Enter valid e-mail or phone number'
      }))
    }
    else if(emailTest===true){
      setRegexObj(prevState=> ({
        ...prevState,
        emailBorder:'false',
        emailHelper:""
      }))
    }

    if (passwordTest===false){
      setRegexObj(prevState=> ({
        ...prevState,
        passwordBorder:'true',
        passwordHelper:'Enter valid password'
      }))
    }
    else if(passwordTest===true){
      setRegexObj(prevState=> ({
        ...prevState,
        passwordBorder:'false',
        passwordHelper:""
      }))
    }
    console.log(loginObj)
    if(emailTest===true && passwordTest===true){
      login(loginObj).then((response)=>{
        console.log(response)
      }).catch((error)=>{
        console.log(error)
      })
      console.log("login Success")
    }
  }

  return (
    <div>
      <Paper elevation={3} className={classes.main}>
        <Box className={classes.main1}>
          <Box className={classes.mainbutton}>
            <Button className={classes.loginbutton}>LOGIN</Button>
            <Button onClick={openSignup} className={classes.signupbutton}>SIGNUP</Button>
          </Box>
          <Box className={classes.form}>
            <Box className={classes.texttitle}><span>Email Id</span>
              <TextField className={classes.emailtext} onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper} variant="outlined" size="small" />
            </Box>
            <Box className={classes.texttitle}><span>Password</span>
              <TextField className={classes.passwordtext} onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} variant="outlined" size="small" />
              <Button className={classes.texttitle1} size="x-small" variant='text'>Forget Password?</Button>
            </Box>
            <Box >
              <Button className={classes.loginbutton1} onClick={submit} variant="contained">Login</Button>
            </Box>
            <Box className={classes.ortext}><Divider sx={{ borderBottomWidth: 3, width: '30%' }} />OR <Divider sx={{ borderBottomWidth: 3, width: '30%' }} /></Box>
            <Box className={classes.fbg}>
              <Box className={classes.facebookc}>
                <Button className={classes.facebookb} variant="contained" >Facebook</Button>
              </Box>
              <Box className={classes.googlec}>
                <Button className={classes.googleb} variant="outlined" disabled sx={{ width: '100%', color: 'black' }}>Google</Button>
              </Box>
            </Box>

          </Box>
        </Box>

      </Paper>

    </div>
  )
}

export default Login
