import React from 'react'
import Book from '../../components/book/Book'
import Header from '../../components/header/Header'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles'
import SplitButton from './SplitButton';
import { useState } from 'react';
import { useEffect } from 'react';
import { getBookList } from '../../services/dataService';



const useStyles = makeStyles({
    container2: {
        width: '85vw',
        height: 'auto',
        border: '0px solid red',
        position: 'relative',
        left: '160px',
    },
    header2: {
        width: '100%',
        height: '10vh',
        border: '1px solid red',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: '700px',
        border: '0px solid black',
    },
    booktextitem: {
        width: '14%',
        display: 'flex',
        border: '0px solid red',
        alignItems: 'center',
        position: 'relative',
        left: '5px',
    },
    bookstxt: {
        fontSize: '24px',
        fontWeight: '550',
        letterSpacing: '0px',
        position: 'relative',
        bottom: '3px',
    },
    totalitems: {
        fontSize: '14px',
        opacity: '0.7',
        position: 'relative',
        left: '5px',
    },
    header2btn: {
        position: 'relative',
        left: '16px',
    },
    footer: {
        height:'8vh',
        width:'100vw',
        display:'flex',
        border:'0px solid red',
        flexDirection:'row',
        alignItems:'center',
        fontSize:'11px',
        position:'relative',
        top:'30px',
        backgroundColor:'#2E1D1E',
        color:'#FFFFFF',
    },
    footertxt: {
        position:'relative',
        left:'180px',
    }
})

function Dashboard() {

    const classes = useStyles()

    const [bookList, setBookList] = useState([])


    useEffect(() => {
        getBookList().then((response) => {
            console.log(response)
            setBookList(response.data.result)
        }).catch((error) => {
            console.log(error)
        })
    },[])

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
                    <Box  sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                        {
                            bookList.map((book) => (<Book key={book._id} book={book} />))
                        }
                    </Box>
                </Box>
                <Box className={classes.footer}>
                    <Box className={classes.footertxt}>Copyright @ 2020, Bookstore Private Limited.All Rights Reserved</Box>
                </Box>
            </Box>
        </div>
    )
}

export default Dashboard
