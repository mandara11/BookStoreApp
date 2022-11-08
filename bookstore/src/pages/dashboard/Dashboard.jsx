import React from 'react'
import Book from '../../components/book/Book'
import Header from '../../components/header/Header'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles'
import SplitButton from './SplitButton';



const useStyles = makeStyles({
    container2: {
        width: '85vw',
        height: 'auto',
        border: '0px solid red',
        position: 'relative',
        left: '100px',
    },
    header2: {
        width: '100%',
        height: '12vh',
        border: '1px solid red',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap:'700px',
        border: '0px solid black',
    },
    booktextitem: {
        width:'14%',
        display:'flex',
        border:'0px solid red',
        alignItems:'center',
        position:'relative',
        left:'70px',
    },
    bookstxt: {
        fontSize: '24px',
        fontWeight:'550',
        letterSpacing:'0px',
        position:'relative',
        bottom:'3px',
    },
    totalitems: {
        fontSize:'14px',
        opacity:'0.7',
        position:'relative',
        left:'5px',
    },
    header2btn: {
       position:'relative',
       left:'100px',
    }
})

function Dashboard() {

    const classes = useStyles()

    return (
        <div>
            <Box>
                <Header />
                <Box className={classes.container2}>
                    <Box className={classes.header2}>
                        <Box className={classes.booktextitem}>
                            <Box className={classes.bookstxt}>Books</Box>
                            <Box className={classes.totalitems}>(128 items)</Box>
                        </Box>
                        <Box className={classes.header2btn}>
                            <SplitButton />
                        </Box>
                    </Box>
                    <Box>
                        <Book />
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Dashboard
