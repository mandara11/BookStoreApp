import { makeStyles } from '@mui/styles'
import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';


const useStyle = makeStyles({
    main2: {
        width: '20vw',
        height: '45vh',
        border: '1px solid #D3D3D3',
        display: 'flex',
        flexDirection: 'column',
    },
    bookimage: {
        width: '100%',
        height: '60%',
        backgroundColor: '#F5F5F5',
        display: 'flex',
        border: '0px solid red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookimg: {
        width: '100%',
        height: '100%',
    },
    bookimage2: {
        width: '45%',
        height: '80%'
    },
    bookdetail: {
        width: '100%',
        height: '40%',
        display: 'flex',
        border: '0px solid red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    booktext: {
        width: '85%',
        height: '80%',
        border: '0px solid blue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'left',
        lineHeight: '1.5'
    },
    booktitle: {
        height: '22%',
        fontWeight: '500',
        fontFamily: 'normal normal normal 14px/19px Roboto',
        color: '#0A0102',
    },
    bookauthor: {
        height: '22%',
        color: '#878787',
        fontFamily: 'normal normal normal 10px/13px Roboto',
    },
    bookdetail1: {
        width: '30%',
        height: '22%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bookratings: {
        width: '60%',
        backgroundColor: '#388E3C',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: 'white',
    },
    mark: {
        width: '30%',
        color: '#878787',
        fontFamily: 'normal normal normal Roboto',
        fontSize: '14px',
    },
    bookprice: {
        width: '50%',
        height: '22%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bookdiscount: {
        fontWeight: '500',
        fontSize: '15px',
    },
    bookcost: {
        color: '#878787',
        textDecorationLine: 'line-through',
        fontSize: '12px',
    }
})

function Book() {
    const classes = useStyle()
    return (
        <div>
            <Paper elevation={1} className={classes.main2}>
                <Box className={classes.bookimage}>
                    <Box className={classes.bookimage2}><img className={classes.bookimg} src="https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3Adbd4f4a0-20d3-48b1-ae13-926e5ed7f1fb&params=version%3A0&token=1667972913_da39a3ee_a9dfdd547de8348acdc2178c7c44eaaad0e98133&api_key=CometServer1" /></Box>
                </Box>
                <Box className={classes.bookdetail}>
                    <Box className={classes.booktext}>
                        <Box className={classes.booktitle}>Don't Make Me Think</Box>
                        <Box className={classes.bookauthor}>by Steve Krug</Box>
                        <Box className={classes.bookdetail1}>
                            <Box className={classes.bookratings}>
                                <Box sx={{ fontSize: '12px' }}>4.5</Box>
                                <StarIcon fontSize="12px" sx={{ color: 'white' }} />
                            </Box>
                            <Box className={classes.mark}> (20)</Box>
                        </Box>
                        <Box className={classes.bookprice}>
                            <Box className={classes.bookdiscount}>Rs. 1500</Box>
                            <Box className={classes.bookcost}>Rs. 20000</Box>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </div>
    )
}

export default Book
