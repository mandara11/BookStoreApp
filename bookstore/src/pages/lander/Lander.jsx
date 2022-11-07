import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import Login from '../../components/login/Login';
import SignUp from '../../components/signup/SignUp';



const useStyles = makeStyles({
    container: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#A8A8A8',
        zIndex: '1',
    },
    main2: {
        width: '45%',
        height: '60%',
        backgroundColor: '#F5F5F5',
        position: 'absolute',
        top: '100px',
        left: '360px',
        zIndex: 5,
        borderRadius: '21px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        opacity: '1',
        zIndex: '2',
    },
    imgtext: {
        width: '50%',
        height: '76%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    maintext: {
        fontSize: 'large',
        fontWeight: '500',
        position: 'relative',
        left: '15px',
    },
    image: {
        border: '0px solid red',
        height: '80%',
        width: '75%',
    },
    image1: {
        height: '100%',
        width: '100%',
        borderRadius: '180px',
        position: 'relative',
        left: '10px',
        top: '8px'
    },
    image2: {
        height:'30px',
        width:'30px',
        position:'relative',
        bottom:'185px',
        left:'70px',
    }

})

function Lander() {

    const [toggle, setToggle] = useState(false)

    const listenTologin1 = () => {
        setToggle(true)
    }
    const listenTosignup1 = () => {
        setToggle(false)
    }
    const classes = useStyles()
    return (
        <div>
            <Box className={classes.container}>
                <Box className={classes.main2}>
                    <Box className={classes.imgtext}>
                        <Box className={classes.image}>
                            <img className={classes.image1} src='https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A85534115-ba16-412e-b646-6dd43d839dd8&params=version%3A0&token=1667793889_da39a3ee_a2182f41187e451f6fd1ed26de716cb8ef9e28f7&api_key=CometServer1' />
                            <img className={classes.image2} src='https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A2f2fecb9-b66b-41fa-9c8c-696295f4b1ad&params=version%3A0&token=1667793889_da39a3ee_a2182f41187e451f6fd1ed26de716cb8ef9e28f7&api_key=CometServer1' />
                        </Box>
                        <Box className={classes.maintext}>ONLINE BOOK SHOPPING</Box>
                    </Box>
                </Box>
                <div>
                    {
                        toggle ? <SignUp listenTosignup1={listenTosignup1} /> : <Login listenTologin1={listenTologin1} />
                    }
                </div>
            </Box>

        </div>
    )
}

export default Lander
