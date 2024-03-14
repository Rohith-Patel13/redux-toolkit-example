// createSlice is a function used to define Redux slice reducers 
import { createSlice } from "@reduxjs/toolkit"


const initialCounterState = {
    count:0
}

// console.log(initialCounterState)

/* 
->createSlice function to define a Redux slice reducer
->It creates a slice named 'counterReducer' 
with the initial state initialCounterState
*/
const counterSliceReducer = createSlice({
    name:'counterReducer',
    initialState:initialCounterState,
    reducers:{
        incrementAction:(previousState)=>{
            previousState.count+=1
        },
        decrementAction:(previousState)=>{
            previousState.count-=1
        }
    }
})

// console.log(counterSliceReducer)// This object contains properties such as name, reducer, actions, and caseReducers.

const {incrementAction,decrementAction} = counterSliceReducer.actions // actions is an object containing all the action creators defined within the slice.
export const actionCreatorObject = {incrementAction,decrementAction}

const counterReducerFunction = counterSliceReducer.reducer // extracts the reducer function from the counterSliceReducer object.This reducer function will be used to handle state updates for the counter slice.
// console.log(counterReducerFunction)

export default counterReducerFunction


