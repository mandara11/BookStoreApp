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
import BookSummary from '../../components/booksummary/BookSummary';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';



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
        left: '108px',
    },
    footer: {
        height: '8vh',
        width: '100vw',
        display: 'flex',
        border: '0px solid red',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: '11px',
        position: 'relative',
        top: '40px',
        backgroundColor: '#2E1D1E',
        color: '#FFFFFF',
    },
    footertxt: {
        position: 'relative',
        left: '180px',
    },
})

function Dashboard(props) {

    const classes = useStyles()

    const [bookList, setBookList] = useState([])
    const [toggle1, setToggle1] = useState(false)
    const [input, setInput] = useState({})

    const [search, setSearch] = useState("")

    const [page, setPage] = useState(1)
    const [pagination, setPagination] = useState(false)

    const openBookSummary = (detailsObj) => {
        setToggle1(true);
        setPagination(true)
        console.log(detailsObj)
        setInput(detailsObj)
        console.log(input.bookName, "particular book details")
    };

    const openBookBack = () => {
        setToggle1(false)
    }

    useEffect(() => {
        getBookList().then((response) => {
            console.log(response)
            setBookList(response.data.result)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const autoRefresh = () => {
        getBookList()
    }

    return (
        <div>
            <Box>
                <Header onChange={event => { setSearch(event.target.value) }} />
            </Box>
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
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                    {toggle1 ? <BookSummary openBookBack={openBookBack} id={input._id} bookName={input.bookName} author={input.author} quantity={input.quantity} discountPrice={input.discountPrice} price={input.price} description={input.description}
                        index={bookList.indexOf(input)} />
                        :
                        //   bookList.map((book) => (<Box onClick={()=>openBookSummary(book)} ><Book key={book._id} book={book} />
                        //   </Box>))
                        page === 1 ?
                            bookList.filter((book) => {
                                if (search == "") {
                                    return book
                                }
                                else if (book.bookName.toLowerCase().includes(search.toLowerCase())) {
                                    return book
                                }
                            }).slice(0, 8).map(
                                (book) => (<Box onClick={() => openBookSummary(book)}><Book key={book._id} book={book} autoRefresh={autoRefresh}
                                /></Box>)
                            ) :
                            page === 2 ?
                                bookList.slice(8, 16).map(
                                    (book) => (<Box onClick={() => openBookSummary(book)}><Book key={book._id} book={book} autoRefresh={autoRefresh}
                                    /></Box>)
                                ) :
                                page === 3 ?
                                    bookList.slice(16, 24).map(
                                        (book) => (<Box onClick={() => openBookSummary(book)}><Book key={book._id} book={book} autoRefresh={autoRefresh}
                                        /></Box>)
                                    ) :
                                    page === 4 ?
                                        bookList.slice(24, 30).map(
                                            (book) => (<Box onClick={() => openBookSummary(book)}><Book key={book._id} book={book} autoRefresh={autoRefresh}
                                            /></Box>)
                                        ) :
                                        null
                    }
                </Box>
            </Box>
            {
                pagination ? null :
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', color: '#878787', position: 'relative', top: '20px' }}>
                    <HomeIcon color='action' />
                    <Stack spacing={4}>
                        <Pagination size='medium' component="div" count={4} siblingCount={0}

                            onChange={(e, value) => setPage(value)}
                        />
                    </Stack>
                </Box>
            }
            <Box className={classes.footer}>
                <Box className={classes.footertxt}>Copyright @ 2020, Bookstore Private Limited.All Rights Reserved</Box>
            </Box>
        </div>
    )
}

export default Dashboard
