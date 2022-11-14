import React from 'react'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Header from '../header/Header';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Divider } from '@mui/material';
import Rating from '@mui/material/Rating';
import InputBase from '@mui/material/InputBase';
import { useState } from 'react';
import Counter from './Counter';
import { addToCart, addToWishList } from '../../services/dataService';


const useStyle = makeStyles({
  headerbsummary: {
    width: '100vw',
    height: '8vh',
    border: '0px solid red',
    display: 'flex',
    alignItems: 'center',
  },
  homebook: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    left: '140px',
  },
  homebsummary: {
    color: '#9D9D9D',
    fontSize: '12px',
  },
  bookbsummary: {
    color: '#0A0102',
    fontSize: '12px',
    position: 'relative',
    left: '4px',
  },
  container3: {
    width: '80vw',
    height: '120vh',
    border: '0px solid red',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    position: 'relative',
    left: '140px',
  },
  bookimages: {
    width: '5%',
    height: '120px',
    display: 'flex',
    flexDirection: 'column',
    border: '0px solid blue',
  },
  bookimage1: {
    width: '100%',
    height: '50%',
    border: '1px solid #7C1E1E',
    backgroundColor: '#FFE7E9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookimage2: {
    width: '100%',
    height: '50%',
    border: '1px solid #D1D1D1',
    borderRadius: '2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container4: {
    width: '96%',
    height: '100%',
    border: '0px solid black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  bookimgbtn: {
    width: '36%',
    height: '56%',
    border: '0px solid purple',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookdetails: {
    width: '65%',
    height: '100%',
    border: '0px solid purple',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  bookimg1: {
    width: '100%',
    height: '90%',
    border: '1px solid #D1D1D1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookbtn: {
    width: '100%',
    height: '10%',
    display: 'flex',
    alignItems: 'flex-end',
  },
  bookbtns: {
    width: '100%',
    height: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addbag: {
    width: '45%',
    backgroundColor: '#A03037 !important',
    borderRadius: '0px',
  },
  addfav: {
    width: '45%',
    backgroundColor: '#333333 !important',
  },
  bookdetails1: {
    width: '93%',
    height: '95%',
    border: '0px solid orange',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  booktitle1: {
    fontSize: '25px',
    fontWeight: '500',
  },
  bookauthor1: {
    fontSize: '18px',
    color: '#878787',
  },
  bookpoints1: {
    width: '12%',
    height: '4%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookratings1: {
    width: '60%',
    height: '60%',
    backgroundColor: '#388E3C',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    color: 'white',
  },
  bookquantity1: {
    width: '30%',
    color: '#878787',
    fontFamily: 'normal normal normal Roboto',
    fontSize: '15px',
  },
  bookprice1: {
    width: '26%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookdiscount1: {
    fontWeight: '500',
    fontSize: '20px',
  },
  bookcost1: {
    color: '#878787',
    textDecorationLine: 'line-through',
    fontSize: '14px',
  },
  bookparagraph: {
    width: '80%',
    height: '23%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  para1: {
    width: '100%',
    height: '55%',
    border: '0px solid blue',
    overflow: 'hidden',
    textAlign: 'justify',
  },
  paratext: {
    opacity: '0.7'
  },
  customerfeedback: {
    height: '5%',
    border: '0px solid blue',
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    color: '#0A0102',
  },
  feedbackrating: {
    width: '80%',
    height: '25%',
    border: '0px solid red',
    backgroundColor: '#F5F5F5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  feedbackrate: {
    width: '95%',
    height: '86%',
    border: '0px solid pink',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  stars: {
    width: '10%',
    height: '22%',
  },
  inputbase: {
    width: '100%',
    height: '37%',
    backgroundColor: 'white',
    textAlign: 'left',
  },
  feedbackbutton: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'relative',
  },
  firstfeedback: {
    width: '80%',
    height: '10%',
    border: '0px solid orange',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
    top: '6px',
  },
  ac: {
    width: '27px',
    height: '27px',
    backgroundColor: '#F5F5F5',
    border: '1px solid #E4E4E4',
    color: '#707070',
    borderRadius: '50%',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondfeedback: {
    width: '80%',
    height: '10%',
    border: '0px solid orange',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
    top: '40px',
  },
  sb: {
    width: '27px',
    height: '27px',
    backgroundColor: '#F5F5F5',
    border: '1px solid #E4E4E4',
    color: '#707070',
    borderRadius: '50%',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stars1: {
    position: 'relative',
    bottom: '5px',
  }

})

function BookSummary(props) {
  const classes = useStyle()

  const [toggle2, setToggle2] = useState(false)
  const [toggle3, setToggle3] = useState(false)

  const addToBag = () => {
    setToggle2(true)
    console.log(props.id)
    addToCart(props.id).then((response) => {
      console.log(response, 'added')
    }).catch((errror) => { console.log(errror) })
  }

  const addWishList = () => {
    console.log(props.id)
    addToWishList(props.id).then((response) => {
      console.log(response)
    }).catch((error) => { console.log(error) })
    setToggle3(true)
  }

  const openBook = () => {
    props.openBookBack()
    setToggle2(true)
  }

  return (
    <div>
      <Box>
        {/* <Header /> */}
        <Box className={classes.headerbsummary}>
          <Box className={classes.homebook}>
            <Box className={classes.homebsummary} onClick={openBook}>Home /</Box>
            <Box className={classes.bookbsummary}> Book(01)</Box>
          </Box>
        </Box>
        <Box className={classes.container3}>
          <Box className={classes.bookimages}>
            <Box className={classes.bookimage1}><img src='assets/image1b.png' width='90%' height='90%' /></Box>
            <Box className={classes.bookimage2}><img src='assets/image1a.png' width='100%' height='100%' /></Box>
          </Box>
          <Box sx={{ width: '0.2%' }}></Box>
          <Box className={classes.container4}>
            <Box className={classes.bookimgbtn}>
              <Box className={classes.bookimg1}><img src='assets/image11.png' width='85%' height='85%' /></Box>
              <Box className={classes.bookbtn}>
                <Box className={classes.bookbtns}>
                  {
                    toggle2 ? <Counter />
                      :
                      <Button onClick={addToBag} variant="contained" className={classes.addbag}>Add to Bag</Button>
                  }
                  {
                    toggle3 ?  <Button variant="contained" className={classes.addfav} startIcon={<FavoriteIcon sx={{ color: 'red' }} />}></Button>
                    :
                    <Button onClick={addWishList} variant="contained" className={classes.addfav} startIcon={<FavoriteIcon />}>Wishlist</Button>
                  }
                </Box>
              </Box>
            </Box>
            <Box className={classes.bookdetails}>
              <Box className={classes.bookdetails1}>
                <Box className={classes.booktitle1}>
                  {/* Don't Make Me Think  */}
                  {props.bookName}</Box>
                <Box sx={{ height: '1%' }}></Box>
                <Box className={classes.bookauthor1}>{props.author}</Box>
                <Box sx={{ height: '0.6%' }}></Box>
                <Box className={classes.bookpoints1}>
                  <Box className={classes.bookratings1}>
                    <Box sx={{ fontSize: '12px' }}>4.5</Box>
                    <StarIcon fontSize="10px" sx={{ color: 'white' }} />
                  </Box>
                  <Box className={classes.bookquantity1}>{props.quantity}</Box>
                </Box>
                <Box className={classes.bookprice1}>
                  <Box className={classes.bookdiscount1}>Rs.{props.discountPrice}</Box>
                  <Box className={classes.bookcost1}>Rs. {props.price}</Box>
                </Box>
                <Box sx={{ width: '80%', position: 'relative', top: '15px' }}><Divider sx={{ borderBottomWidth: 2, width: '100%' }} /></Box>
                <Box className={classes.bookparagraph}>
                  <Box className={classes.para1}>
                    <span style={{ color: '#878787', display: 'flex', alignItems: 'center' }}> <Box style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#878787' }}></Box>&nbsp;Book Detail</span>
                    <Box className={classes.paratext} sx={{ marginLeft: '9px', fontSize: '12px', opacity: '0.8' }}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                      takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                      et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                      consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                      sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                      sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                      est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                      labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                      et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus estundefined
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ width: '80%' }}><Divider sx={{ borderBottomWidth: 2, width: '100%' }} /></Box>
                <Box className={classes.customerfeedback}>
                  <span style={{ fontWeight: '500' }}>Customer Feedback</span>
                </Box>
                <Box className={classes.feedbackrating}>
                  <Box className={classes.feedbackrate}>
                    <Box sx={{ fontSize: '14px', height: '18%' }}>Overall rating</Box>
                    <Box className={classes.stars}>
                      <Rating defaultValue={0} size="medium" style={{ color: 'black !important' }} readOnly />
                    </Box>
                    <Box className={classes.inputbase}><InputBase sx={{ marginLeft: '8px' }} placeholder='write your review' />
                    </Box>
                    <Box className={classes.feedbackbutton}><Button variant="contained" sx={{ width: '13%', height: '80%', textTransform: 'capitalize' }}>Submit</Button></Box>
                  </Box>
                </Box>
                <Box className={classes.firstfeedback}>
                  <Box sx={{ display: 'flex' }}>
                    <Box className={classes.ac}>AC</Box>
                    <Box sx={{ marginLeft: '8px', fontSize: '15px', fontWeight: '500' }}>Aniket Chile</Box>
                  </Box>
                  <Box sx={{ height: '28%', }}>
                    <Rating className={classes.stars1} defaultValue={3} size="medium" style={{ color: 'black !important', marginLeft: '35px' }} readOnly />
                  </Box>
                  <Box sx={{ height: '50%', marginLeft: '35px', fontSize: '12px', textAlign: 'justify', color: '#707070' }}>
                    <span >Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking.
                      Chanakya has written on many different topics and his writings are succinct.</span>
                  </Box>
                </Box>
                <Box className={classes.secondfeedback}>
                  <Box sx={{ display: 'flex' }}>
                    <Box className={classes.sb}>SB</Box>
                    <Box sx={{ marginLeft: '8px', fontSize: '14px', fontWeight: '500' }}>Shweta Bodkar</Box>
                  </Box>
                  <Box sx={{ height: '27%' }}>
                    <Rating className={classes.stars1} defaultValue={4} size="medium" style={{ color: 'black !important', marginLeft: '35px' }} readOnly />
                  </Box>
                  <Box sx={{ height: '50%', marginLeft: '35px', fontSize: '12px', textAlign: 'justify', color: '#707070' }}>
                    <span>Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking.
                      Chanakya has written on many different topics and his writings are succinct.</span>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default BookSummary
