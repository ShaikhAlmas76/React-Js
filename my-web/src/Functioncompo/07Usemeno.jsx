import { useMemo, useState } from "react";



const Usememo = () => {

    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)

    const multicountwithmemo = useMemo(function multicount() {

        console.log("multicountwithmemo");
        return count * 2
    }, [count])
    return (
        <>
            <h1> Use memo </h1>

            <h2> {count} </h2>
            <h2> {item} </h2>
            <h2> {multicountwithmemo} </h2>


            <button onClick={() => setCount(count + 1)}> count btn </button>
            <button onClick={() => setItem(item * 3)}> item btn </button>
        </>
    );
}

export default Usememo;