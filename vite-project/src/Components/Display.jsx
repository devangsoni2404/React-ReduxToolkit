import { useSelector } from "react-redux";

const Display = () =>{

    const counter = useSelector(store=>store.counter);

    const counterVal = counter.counterVal

    return <p className="lead mb-4">Counter value is : {counterVal} </p>
}

export default Display;