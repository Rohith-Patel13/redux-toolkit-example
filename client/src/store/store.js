import {configureStore} from '@reduxjs/toolkit'
import counterReducerFunction from './counterSliceReducer'

const store = configureStore({
    reducer:{
        myCounterValReducer:counterReducerFunction
    },
})

export default store
