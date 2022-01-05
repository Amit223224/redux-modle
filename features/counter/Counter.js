import {useSelector,useDispatch} from 'react-redux'
import { decrement, increment } from './counterSlice'

const Counter = () => {
const count =useSelector((state)=>state.counter.count) 
     const dispatch = useDispatch()
    return (
        <div className="App">
           <button className="button" aria-label="Increment value" onClick={()=>dispatch(increment())}>+</button>
     <span className="value">{count}</span>
     <button className="button" aria-label="Decrement value"
      onClick={()=>dispatch(decrement())}>-</button>  
        </div>
    )
}

export default Counter;
