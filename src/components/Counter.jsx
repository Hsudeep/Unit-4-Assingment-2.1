import React from "react";
import styles from "./style.module.css"
const Counter = () =>{
    const [count, setCount] = React.useState(0)
    return(
        <div>
            <h1 className={count%2===0 ? styles.green : styles.red}>Counter: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(count*2)}>Double</button>
        </div>
    )
}

export default Counter;