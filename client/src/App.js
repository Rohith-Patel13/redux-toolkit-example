/*
-> useSelector is a React hook provided by React Redux 
that allows functional components to extract data from 
the Redux store state.
*/
import {useSelector,useDispatch} from 'react-redux'
import {actionCreatorObject} from './store/counterSliceReducer'


function App() {
  
  const countValue = useSelector((state)=>{
    // console.log('In useSelector selector function state value',state)
    // console.log('In useSelector selector function myCounterValReducer which you can find in store.js file',state.myCounterValReducer)
    // console.log('In useSelector selector function count which you can find counterSliceReducer.js file value',state.myCounterValReducer.count)
    const {myCounterValReducer} = state
    const {count} = myCounterValReducer
    return count
  });
  // console.log(countValue)

  // console.log('In App Component',actionCreatorObject)
  const {incrementAction,decrementAction} = actionCreatorObject
  const dispatch = useDispatch()

  const incrementButtonClicked = () => dispatch(incrementAction());
  const decrementButtonClicked = () => dispatch(decrementAction());

  return (
    <div>
      <h1>{countValue}</h1>
      <div>
        <button type='button' onClick={incrementButtonClicked}>
          Increment
        </button>

        <button type='button' onClick={decrementButtonClicked}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
