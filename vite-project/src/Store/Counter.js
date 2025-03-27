import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name:'counter',
    initialState:{counterVal:0},
    reducers:{
         increment : (state,action) => {
           state.counterVal = state.counterVal+1;
        },
        decrement : (state,action) => {
            state.counterVal = state.counterVal-1;
        },
        add : (state,action) => {
            state.counterVal = state.counterVal + Number(action.payload);
        },
        substract : (state,action) => {
            state.counterVal = state.counterVal - Number(action.payload);
        },
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice;