import React from 'react'
import { useReducer } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles({
    box: {
        height:'22px',
        width:'38px',
        display:'flex',
        border: '1px solid gray',
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        right:'20px',
    },
    decre: {
        position:'relative',
        right:'40px',
    }
})

const initialState = 1
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        default:
            return state
    }
}

function Counter() {
    const classes = useStyle()
    const [count,dispatch]=useReducer(reducer,initialState)
    useReducer(reducer, initialState)
    return (
        <div>
            <div style={{display:"flex",flexDirection:'row', color:'black',alignItems:'center'}}>
            <Button onClick={() => dispatch('increment')}><AddCircleOutlineIcon color="action"/></Button>
            <div className={classes.box}> {count}</div>
            <Button className={classes.decre} onClick={() => dispatch('decrement')}><RemoveCircleOutlineIcon color="action"/></Button>
            </div>
            
        </div>
    )
}

export default Counter
