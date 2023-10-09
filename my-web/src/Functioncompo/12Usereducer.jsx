import React, { useReducer } from 'react'
import { useState } from 'react';

// const initialstate = 0

// const reducer = (state, action) => {
//     // console.log(state, action);
//     if (action.type === "INCREMENT") {
//         return state - 1
//     }
//     if (action.type === "DECREMENT") {
//         return state + 1
//     }
//     if (action.type === "MULTY") {
//         return state * 2
//     }
//     return state
// }
// const Usereducer = () => {
//     // const [count, setCount] = useState(0)

//     const [state, dispatch] = useReducer(reducer, initialstate)

//     // const increment = () => {
//     //     setCount(count + 1)
//     // }

//     // const decrement = () => {
//     //     setCount(count - 1)
//     // }

//     return (
//         <>
//             <h1> Usereducer </h1>

//             {/* <h2> {count}</h2> */}
//             <button onClick={() => dispatch({ type: "INCREMENT" })}>update</button>
//             <button onClick={() => dispatch({ type: "DECREMENT" })}>update</button>
//             <button onClick={() => dispatch({ type: "MULTY" })}>update</button>
//         </>
//     );
// }

// export default Usereducer;

const initialstate = 0

const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "INCREMENT") {
        return state + 1
    }
    if (action.type === "DECREMENT") {
        return state - 1
    }
    if (action.type === "multy") {
        return state * 2
    }
    return state
}
const Usereducer = () => {
    // const [count , setCount] = useState(0)

    const [state, dispatch] = useReducer(reducer, initialstate)


    //    const increment =()=>{
    //         setCount (count + 1)
    //     }

    //    const  decrement =()=>{
    //         setCount (count - 1)
    //     }


    return (
        <>

            <h1>usereducer</h1>

            <h2>{state}</h2>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>update</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>update</button>
            <button onClick={() => dispatch({ type: "multy" })}>update</button>
        </>
    );
}

export default Usereducer;