import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles'

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
        zIndex:'3',
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
    }

})

function SignUp(props) {

    const classes = useStyles()

    const openLoginpage=()=>{
        props.listenTosignup1()
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
                            <TextField className={classes.nametexts} variant="outlined" size="small" />
                        </Box>
                        <Box className={classes.texttitles}><span>Email Id</span>
                            <TextField className={classes.emailtexts} variant="outlined" size="small" />
                        </Box>
                        <Box className={classes.texttitles}><span>Password</span>
                            <TextField className={classes.passwordtexts} variant="outlined" size="small" />
                        </Box>
                        <Box className={classes.texttitles}><span>Mobile Number</span>
                            <TextField className={classes.numbertexts} variant="outlined" size="small" />
                        </Box>
                        <Box className={classes.texttitles}>
                            <Button className={classes.signuptexts} variant="contained" >Signup</Button>
                        </Box>
                    </Box>

                </Box>
            </Paper>
        </div>
    )
}

export default SignUp
