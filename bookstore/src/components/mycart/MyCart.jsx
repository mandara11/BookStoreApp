import React, { useEffect } from 'react'
import Header from '../header/Header'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import Counter from '../booksummary/Counter';
import { addOrder, cartItemQuantity, getcartBookList, itemsCount, removeCartListItem } from '../../services/dataService';
import CustomerDetails from '../customerdetails/CustomerDetails';
import OrderSummary from '../ordersummary/OrderSummary';
import { useNavigate } from 'react-router-dom';



const useStyle = makeStyles({
    headercart: {
        width: '79vw',
        height: '10vh',
        border: '0px solid red',
        display: 'flex',
        position: 'relative',
        top: '6px',
        left: '153px',
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontWeight: '500',
    },
    homeheader: {
        color: '#9D9D9D',
        fontSize: '13px',
    },
    cartheader: {
        color: '#0A0102',
        fontSize: '13px',
    },
    containercart: {
        width: '61vw',
        height: 'auto',
        border: '0px solid black',
        position: 'relative',
        left: '153px',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    maincart: {
        width: '100%',
        height: 'auto',
        border: '1px solid #DBDBDB',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailscart: {
        width: '92%',
        height: 'auto',
        margin: '20px 0px 20px 0px',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'column',
    },
    mycartloc: {
        width: '100%',
        height: '6vh',
        border: '0px solid blue',
        display: 'flex',
        justifyContent: 'space-between',
    },
    textcart: {
        width: '38%',
        height: '19vh',
        border: '0px solid pink',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '25px',
    },
    bookimagecart: {
        width: '25%',
        height: '75%',
        marginTop: '5px',
        border: '0px solid orange',
    },
    contentcart: {
        width: '69%',
        height: '100%',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
        left: '20px',
    },
    pricecart: {
        width: '53%',
        height: '17%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    discountcart: {
        color: '#0A0102',
        fontWeight: '500',
        fontSize: '16px',
    },
    costcart: {
        color: '#878787',
        textDecorationLine: 'line-through',
        fontSize: '10px',
    },
    countercart: {
        width: '100%',
        height: '20%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        border: '0px solid red',
        position: 'relative',
        left: '-25px',
    },

    addressdetailscart: {
        width: '100%',
        height: '7vh',
        border: '0px solid #DBDBDB',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: '10px',
    },
    textmycart: {
        width: '92%',
        textAlign: 'left',
        fontSize: '20px',
        fontWeight: '500',
    },
    addressdetailscart1: {
        width: '100%',
        height: 'auto',
        border: '0px solid #DBDBDB',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: '20px',
    },
    contentOD: {
        width: '92%',
        height: 'auto',
        margin: '20px 0px 20px 0px',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        fontWeight: '500',
        position:'relative',
     },
    addressorder: {
        width: '100%',
        height: '10vh',
        border: '1px solid #DBDBDB',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
     },
     bookorder: {
        width: '38%',
        height: '14vh',
        marginBottom: '20px',
        border: '0px solid orange',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        position:'relative',
        top:'20px',
     },
     bookImgOD: {
        width: '20%',
        height: '90%',
        marginTop: '5px',
        border: '0px solid orange',
     },
     dataOD: {
        width: '69%',
        height: '100%',
        border: '0px solid orange',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
     },
     priceOD: {
        width: '53%',
        height: '25%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
     },
     discountOD: {
        color: '#0A0102',
        fontWeight: '500',
        fontSize: '16px',
     },
     costOD: {
        color: '#878787',
        textDecorationLine: 'line-through',
        fontSize: '10px',
     },
     btnOD: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
     }

})

function MyCart(props) {
    const classes = useStyle()

    const navigate = useNavigate()

    const openDashBoard = () => {
        navigate('/dashboard')
     }

    const [count, setCount] = useState(1)
    const [cartList, setCartList] = useState([])
    const [details, setDetails] = useState(false)
    const [toggle4, setToggle4] = useState(false)
    const [order, setOrder] = useState(false)
    const [quantity, setQuantity] = useState([])
    const [orderList, setOrderList] = useState([])

    const openCustomerDetails = () => {
        setDetails(true)
        setToggle4(true)
    }

    const openBookDetails = () => {
        setOrder(true)
    }
    
    const decrementValue = (id, quan) => {
        if (count > 1) {
            setCount(count => count - 1)
            let inputObj = {
                cartItem_id: id,
                quantityToBuy: quan - 1
            }
            console.log(inputObj, 'value of quantity')
            cartItemQuantity(inputObj).then((response) => {
                console.log(response, 'decrement value');

            }).catch((error) => console.log(error))
        } else {
            setCount(1)
        }
        console.log(quantity, 'quantity value of product dec....')
    }

    const incrementValue = (id, quan) => {
        console.log(id, 'from mycart inc...')
        setCount(count => count + 1)
        let inputObj = {
            cartItem_id: id,
            quantityToBuy: quan + 1
        }
        console.log(inputObj, 'value of quantity')
        cartItemQuantity(inputObj).then((response) => {
            console.log(response, 'increment value');

        }).catch((error) => console.log(error))
    }

    const getcartList = () => {
        console.log('cart list books')

        getcartBookList().then((response) => {
            console.log(response)
            setCartList(response.data.result)
            setQuantity(response.data.result)
            setOrderList(response.data.result)
        }).catch((error) => console.log(error))
    }


    // const getcartList = () => {
    //     console.log('cart BookList')
    //     getcartBookList().then((response) => {
    //         console.log(response)
    //         setCartList(response.data.result)
    //     }).catch((error) => console.log(error))
    // }

    useEffect(() => {
        getcartList()
    }, [])

    const removeproduct = (id) => {
        let cartlistObj = { id: id }
        removeCartListItem(cartlistObj)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
        console.log(cartlistObj, "deleted succesfully")
    }

    const orderPlacedSuccess = () => {
        console.log(cartList, 'list of ordered books')
        let orderList = [];
        
        for (let i = 0; i < cartList.length; i++) {
            let inObj = {
               product_id: cartList[i].product_id._id,
               product_name: cartList[i].product_id.bookName,
               product_quantity: cartList[i].quantityToBuy,
               product_price: cartList[i].product_id.discountPrice
            }
            orderList.push(inObj);
         }
         console.log(orderList, 'printing ordered data...')
         let orderObj = {orders: orderList}
         addOrder(orderObj).then((response) => {
            console.log(response)
         })
            .catch((error) => { console.log(error) })
            navigate('/ordersuccess')
      }
   

    return (
        <div>
            <Box>
                <Header />
                <Box className={classes.headercart}>
                    <Box className={classes.homeheader}  onClick={openDashBoard}>Home /</Box>
                    <Box className={classes.cartheader}> My cart</Box>
                </Box>
                <Box className={classes.containercart}>
                    <Card className={classes.maincart} variant="outlined">
                        <Box className={classes.detailscart}>
                            <Box className={classes.mycartloc}>
                                <Box sx={{ fontSize: '18px', fontWeight: '500' }}>My cart (1)</Box>
                                <Button startIcon={<LocationOnIcon sx={{ color: '#A03037' }} />} endIcon={<ArrowDropDownIcon sx={{ width: '30px', height: 'auto', color: '#DCDCDC' }} />}
                                    variant="outlined" sx={{
                                        width: '30%', textTransform: 'none', color: '#0A0102', borderColor: '#DCDCDC', display: 'flex', justifyContent: 'space-around'
                                    }}>Use current location
                                </Button>
                            </Box>

                            <Box sx={{ height: '2vh' }}></Box>
                            {
                                cartList.map((note) => (
                                    <Box className={classes.textcart}>
                                        <Box className={classes.bookimagecart}>
                                            <img width='100%' height='100%' src='assets/image11.png' />
                                        </Box>
                                        <Box className={classes.contentcart}>
                                            <Box sx={{ height: '22%', fontSize: '17px', color: '#0A0102', fontWeight: '500' }}>
                                                {/* Don't Make Me Think */}
                                                {note.product_id.bookName}
                                            </Box>
                                            <Box sx={{ height: '17%', fontSize: '13px', color: '#9D9D9D', fontWeight: '500' }}>
                                                {/* by Steve Krug */}
                                                {note.product_id.author}
                                            </Box>
                                            <Box className={classes.pricecart}>
                                                <Box className={classes.discountcart}>Rs. {note.product_id.discountPrice} </Box>
                                                <Box className={classes.costcart}>Rs. {note.product_id.price}</Box>
                                            </Box>
                                            <Box sx={{ height: '15%' }}></Box>
                                            <Box className={classes.countercart}>
                                                {/* <Counter /> */}
                                                <Box sx={{ display: 'flex', alignItems: 'center', width: '45%', justifyContent: 'space-between', border: '0px solid orange' }}>
                                                    <Box >
                                                        <IconButton onClick={() => decrementValue(note._id, note.quantityToBuy)} size='small' sx={{ border: '1px solid #DBDBDB' }}>
                                                            <RemoveIcon fontSize='small' sx={{ color: '#DBDBDB' }} /></IconButton>
                                                    </Box>
                                                    <Box sx={{ width: '40%', height: '95%', border: '1px solid #DBDBDB' }} >
                                                        <span style={{ fontSize: '22px' }} >{count}</span>
                                                    </Box>
                                                    <Box>
                                                        <IconButton onClick={() => incrementValue(note._id, note.quantityToBuy)} size='small' sx={{ border: '1px solid #DBDBDB' }}>
                                                            <AddIcon fontSize='small' sx={{ color: '#333232' }} /></IconButton>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ width: '30%' }}>
                                                    <Box
                                                        onClick={() => removeproduct(note._id)}
                                                        style={{ fontSize: '14px', color: '#0A0102', fontWeight: '500', position: 'relative', left: '10px' }} >Remove</Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))
                            }
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                {
                                    details ? null :
                                        <Button sx={{ backgroundColor: '#3371B5', width: '20%' }} variant="contained" onClick={openCustomerDetails} >Place Order</Button>
                                }
                            </Box>
                        </Box>
                    </Card>
                    {toggle4 ?
                        <CustomerDetails openBookDetails={openBookDetails} /> :
                        <Card className={classes.addressdetailscart} variant="outlined">
                            <span className={classes.textmycart}>Address Details</span>
                        </Card>
                    }
                    {
                        order ? 
                            <Card className={classes.addressdetailscart1} variant="outlined">
                                <Box className={classes.contentOD}>
                                    <Box><span className={classes.textmycart}>Order summery</span></Box>
                                    {orderList.map((item) => (
                                        <Box className={classes.bookorder}>
                                            <Box className={classes.bookImgOD}>
                                                <img width='100%' height='100%' src='assets/image11.png' />
                                            </Box>
                                            <Box className={classes.dataOD}>
                                                <Box sx={{ height: '30%', fontSize: '17px', color: '#0A0102', fontWeight: '500' }}>{item.product_id.bookName}</Box>
                                                <Box sx={{ height: '24%', fontSize: '13px', color: '#9D9D9D', fontWeight: '500' }}>{item.product_id.author}</Box>
                                                <Box className={classes.priceOD}>
                                                    <Box className={classes.discountOD}>Rs. {item.product_id.discountPrice}</Box><Box className={classes.costOD}>Rs. {item.product_id.price}</Box></Box>
                                                <Box sx={{ height: '15%' }}></Box>
                                            </Box>
                                        </Box>))
                                    }
                                    <Box className={classes.btnOD}>
                                        <Button variant='contained' sx={{ width: '23%' }} onClick={orderPlacedSuccess}>Checkout</Button>
                                    </Box>
                                </Box>
                            </Card>
                            :
                    <Card className={classes.addressorder} variant="outlined">
                        <span className={classes.textMC}>Order summery</span>
                    </Card>
                    }

                </Box>
            </Box>

        </div>
    )
}

export default MyCart
