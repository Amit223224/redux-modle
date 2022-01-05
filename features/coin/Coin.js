
import {useSelector} from 'react-redux'
const Coin = () => {
    const count =useSelector((state)=>state.counter.count)
    return (
        <div>
          <span className="value">{count}</span>  
        </div>
    )
}

export default Coin;
