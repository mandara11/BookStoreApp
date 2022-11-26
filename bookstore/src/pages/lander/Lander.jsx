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
        bottom:'200px',
        left:'75px',
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        main2: {
           display: 'none',
        },        
    },
    ['@media only screen and (min-width: 481px) and (max-width: 768px)']: {
        main2: {
            display: 'none',
         },
    },
    ['@media only screen and (min-width: 721px) and (max-width: 1024px)']: {
        main2: {
            width: '50%',
            height: '58%',            
            top: '170px',
            left: '100px',

        },
        imgtext: {
            border: '0px solid blue',
            width: '60%',
            height: '76%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        image: {
            width: '12rem',
            height: '12rem',
        },
        image2: {
            width: '18px',
            bottom: '150px',
            left: '47px',        
        },
        maintext: {
            position:'relative',
            top :'10px',
            fontSize:'15px',
        }
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
                            <img className={classes.image1} src='assets/logo1.png' />
                            <img className={classes.image2} src='assets/education.png' />
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
