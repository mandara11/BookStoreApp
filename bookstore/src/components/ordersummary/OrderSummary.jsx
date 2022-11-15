import { makeStyles } from '@mui/styles'
import React from 'react'
import { Box, Button, Card } from '@mui/material';


const useStyle = makeStyles({
    containerod: {
        width: '61vw',
        height: '30vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
     },
     mainod: {
        width: '92%',
        height: '85%',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        fontWeight: '500',
     },
     contentod: {
        width: '100%',
        height: '15%',
        border: '0px solid red',
        textAlign: 'left',
        fontSize: '18px', 
     },
     detailsod: {
        width: '38%',
        height: '50%',
        border: '0px solid orange',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
     },
     bookimageod: {
        width: '20%',
        height: '90%',
        marginTop: '5px',
        border: '0px solid orange',
     },
     textod: {
        width: '69%',
        height: '100%',
        border: '0px solid orange',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
     },
     odprice: {
        width: '55%',
        height: '25%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position:'relative',
        top:'10px',
     },
     oddiscount: {
        color: '#0A0102',
        fontWeight: '500',
        fontSize: '16px',
     },
     odcost: {
        color: '#878787',
        textDecorationLine: 'line-through',
        fontSize: '10px',
        position:'relative',
        left:'10px',
     },
     checkbutton: {
        width: '80%',
        display: 'flex',
        justifyContent: 'flex-end',
        position:'relative',
        left:'160px',
     }
})

function OrderSummary(props) {
    const classes = useStyle()
  return (
    <div>
        <Card className={classes.containerod} variant='outlined'>
         <Box className={classes.mainod}>
            <Box className={classes.contentod}>
               <span>Order summery</span>
            </Box>
            <Box className={classes.detailsod}>
               <Box className={classes.bookimageod}>
                  <img width='100%' height='100%' src='assets/image11.png' />
               </Box>
               <Box className={classes.textod}>
                  <Box sx={{ height: '30%', fontSize: '17px', color: '#0A0102', fontWeight: '500' }}>
                     {/* Don't Make Me Think */}
                     {props.item.product_id.bookName}</Box>
                  <Box sx={{ height: '24%', fontSize: '13px', color: '#9D9D9D', fontWeight: '500' }}>{props.item.product_id.author}</Box>
                  <Box className={classes.odprice}>
                     <Box className={classes.oddiscount}>Rs. 15000</Box><Box className={classes.odcost}>Rs. {props.item.product_id.price}</Box></Box>
                  <Box sx={{ height: '20%' }}></Box>                  
               </Box>
            </Box>
            <Box className={classes.checkbutton}>
               <Button variant='contained' sx={{width: '23%'}}>Checkout</Button>
            </Box>
         </Box>

      </Card>
      
    </div>
  )
}

export default OrderSummary
