import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { getWishList } from '../../services/dataService';


const useStyle = makeStyles({
    headerwishlist: {
        width: '80vw',
        height: '10vh',
        border: '0px solid blue',
        display: 'flex',
        position: 'relative',
        top: '6px',
        left: '153px',
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontWeight: '500',
    },
    homewishlist: {
        color: '#9D9D9D',
        fontSize: '12px',
    },
    wishlistheader: {
        color: '#0A0102',
        fontSize: '12px',
    },
    containerwish: {
        width: '78vw',
        height: 'auto',
        border: '1px solid #E4E4E4',
        position: 'relative',
        left: '153px',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    mainwishlist: {
        width: '100%',
        height: '8vh',
        backgroundColor: '#F5F5F5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    detilswishlist: {
        width: '94%',
        fontSize: '18px',
        color: '#0A0102',
        textAlign: 'left',
        fontWeight: '500',
    },
    bookdetailwish: {
        width: '100%',
        height: '25vh',
        borderBottom: '1px solid #E4E4E4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookcontentwish: {
        width: '92%',
        height: '50%',
        border: '0px solid pink',
        display: 'flex',
        justifyContent: 'space-between',
    },
    imagewish: {
        width: '35%',
        height: '100%',
        border: '0px solid orange',
        display: 'flex',
        justifyContent: 'space-between',
    },
    imagebookwish: {
        width: '18%',
        height: '100%',
        border: '0px solid pink'
    },
    booknamewish: {
        width: '72%',
        height: '100%',
        border: '0px solid pink',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        fontWeight: '500',
    },
    booktitlewish: {
        height: '32%',
        fontSize: '18px',
        color: '#0A0102',
    },
    bookAuthorwish: {
        height: '28%',
        fontSize: '12px',
        color: '#9D9D9D'
    },
    bookpricewish: {
        width: '40%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    discountwish: {
        fontSize: '15px',
    },
    pricewish: {
        fontSize: '12px',
        color: '#9D9D9D',
        textDecorationLine: 'line-through',
        position: 'relative',
        left: '10px',
    },
    footer1: {
        height: '8vh',
        width: '100vw',
        display: 'flex',
        border: '0px solid red',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: '11px',
        position: 'relative',
        top: '30px',
        backgroundColor: '#2E1D1E',
        color: '#FFFFFF',
        position: 'relative',
        top: '35vh',
    },
    footertxt1: {
        position: 'relative',
        left: '180px',
    },
})

function MyWishlist() {
    const classes = useStyle()
    const [wishList, setWishList] = useState([])

    useEffect(() => {
        getWishList().then((response) => {
            console.log(response)
            setWishList(response.data.result)
        }).catch((error) => { console.log(error) })
    }, [])
    return (
        <div>
            <Box>
                <Header />
                <Box className={classes.headerwishlist}>
                    <Box className={classes.homewishlist} >Home /</Box>
                    <Box className={classes.wishlistheader}>  My Wishlist</Box>
                </Box>
                <Box className={classes.containerwish}>
                    <Box className={classes.mainwishlist}>
                        <Box className={classes.detilswishlist}>
                            <span>My Wishlist (02)</span>
                        </Box>
                    </Box>
                    {
                        wishList.map((note) => (
                            <Box className={classes.bookdetailwish}>
                                <Box className={classes.bookcontentwish}>
                                    <Box className={classes.imagewish}>
                                        <Box className={classes.imagebookwish}>
                                            <img src='assets/image11.png' width='100%' />
                                        </Box>
                                        <Box className={classes.booknamewish}>
                                            <Box className={classes.booktitlewish}>
                                                <Box>
                                                {note.product_id.bookName}
                                                    {/* Dont Make Me Think */}
                                                </Box>
                                            </Box>
                                            <Box className={classes.bookAuthorwish}><span>{note.product_id.author}</span></Box>
                                            <Box className={classes.bookpricewish}>
                                                <Box className={classes.discountwish}>Rs. {note.product_id.discountPrice}</Box>
                                                <Box className={classes.pricewish}>Rs. {note.product_id.price}</Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className={classes.deletewishlist}>
                                        <DeleteIcon sx={{ color: '#9D9D9D' }} fontSize='small' />
                                    </Box>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>

                <Box className={classes.footer1}>
                    <Box className={classes.footertxt1}>Copyright @ 2020, Bookstore Private Limited.All Rights Reserved</Box>
                </Box>
            </Box>

        </div>
    )
}

export default MyWishlist
