import { useRef } from "react";
import { useDispatch } from "react-redux"
import { counterActions } from "./Store/Counter";
import { privacyActions } from "./Store/Privacy";

const Controls = ()=>{

  const dispatch = useDispatch();

  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  }

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  }

  const handleAdd = () => {
    dispatch(counterActions.add(inputElement.current.value));
    inputElement.current.value = "";
  }

  const handleSub = () => {
    dispatch(counterActions.substract(inputElement.current.value));
    inputElement.current.value = "";
  }

  const handleToggle = () => {
    dispatch(privacyActions.privacyReducer());
  }

    return <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
    <button type="button" className="btn btn-primary btn-lg px-4" onClick={handleIncrement}>+1</button>
    <button type="button" className="btn btn-success btn-lg px-4" onClick={handleDecrement}>-1</button>
    <button type="button" className="btn btn-warning btn-lg px-4" onClick={handleToggle}>Privacy Toggle</button>
  </div>

  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center input-control">
    <input type="text" placeholder="Enter Number" className="input" ref={inputElement}/>
    <button type="button" className="btn btn-info btn-lg px-4" onClick={handleAdd}>Add</button>
    <button type="button" className="btn btn-danger btn-lg px-4" onClick={handleSub}>Substract</button>
  </div>

  </> 
}

export default Controls