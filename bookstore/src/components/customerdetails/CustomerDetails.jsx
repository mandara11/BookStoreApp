import { makeStyles } from '@mui/styles'
import React from 'react'
import { Box, Button, buttonBaseClasses, Card, TextField } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput';
import { useState } from 'react';

const useStyle = makeStyles({
    containercd: {
        width: '61vw',
        height: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    maindetails: {
        border: '0px solid red',
        width: '92%',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    maincd: {
        width: '100%',
        height: '8%',
        border: '0px solid red',
        display: 'flex',
        justifyContent: 'space-between'
    },
    customerdetails: {
        color: '#333232',
        fontSize: '20px',
        fontWeight: '500',
    },
    newadd: {
        width: '20%'
    },
    detailscontent: {
        width: '95%',
        height: '80%',
        border: '0px solid red',
        display: 'flex',
        alignItems: 'center',
        fontWeight: '500',
    },
    maintextfields: {
        width: '72%',
        height: '92%',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    inputcd: {
        width: '100%',
        height: '18%',
        display: 'flex',
        justifyContent: 'space-between',
        border: '0px solid blue',
    },
    textcd: {
        textAlign: 'left !important',
        width: '49%',
        fontSize: '12px',
        display: 'flex',
        flexDirection: 'column',
    },
    addressdetail: {
        width: '100%',
        height: '30%',
        border: '0px solid red',
        textAlign: 'left !important',
        fontSize: '12px',
    },
    address: {
        width: '100%',
        height: '100%',
    },
    radiobuttons: {
        width: '60%',
        height: '14%',
        border: '0px solid red',
        textAlign: 'left',
        fontSize: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    continuebutton: {
        width: '100%',
        height: '10%',
        border: '0px solid red',
        display: 'flex',
        justifyContent: 'flex-end'
    }
})

function CustomerDetails(props) {
    const classes = useStyle()

    const [continuebutton, setContinueButton] = useState(false)

    const openOrderDetails = () => {
        props.openBookDetails()
        setContinueButton(true)
    }

    return (
        <div>
            <Card className={classes.containercd}>
                <Box className={classes.maindetails}>
                    <Box className={classes.maincd}>
                        <Box className={classes.customerdetails}>Customer Details</Box>
                        <Box className={classes.newadd}>
                            <Button variant='outlined' sx={{ width: '100%', color: '#A03037', border: '1px solid #A03037', textTransform: 'capitalize' }}>Add New Address</Button>
                        </Box>
                    </Box>
                    <Box className={classes.detailscontent}>
                        <Box className={classes.maintextfields}>
                            <Box className={classes.inputcd}>
                                <Box className={classes.textcd}>
                                    <span>Full Name</span>
                                    <TextField variant="outlined" size='small' />
                                </Box>
                                <Box className={classes.textcd}>
                                    <span>Mobile Number</span>
                                    <TextField variant="outlined" size='small' />
                                </Box>
                            </Box>
                            <Box className={classes.addressdetail}>
                                <Box className={classes.address}>
                                    <span>Address</span>
                                    <OutlinedInput variant="outlined" size='small' sx={{ width: '100%', height: '80%' }}
                                    />
                                </Box>
                            </Box>
                            <Box className={classes.inputcd}>
                                <Box className={classes.textcd}>
                                    <span>city/town</span>
                                    <TextField variant="outlined" size='small' />
                                </Box>
                                <Box className={classes.textcd}>
                                    <span>State</span>
                                    <TextField variant="outlined" size='small' />
                                </Box>
                            </Box>
                            <Box className={classes.radiobuttons}>

                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.continuebutton}>
                        {
                            continuebutton ? null
                                :
                                <Button sx={{ width: '23%', height: '80%' }} variant='contained' onClick={openOrderDetails} >Continue</Button>
                        }
                    </Box>
                </Box>
            </Card>

        </div>
    )
}

export default CustomerDetails
