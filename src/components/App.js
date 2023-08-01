import React, {useReducer} from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer, {initialState} from '../reducers'

import {
  applyNumber,
  changeOperation,
  clearDisplay,
  memoryAdd,
  memoryApply,
  memoryClear} 
  from '../actions'


function App() {

const [state, dispatch ] = useReducer(reducer, initialState);

// const oneHandleClick = (evt) => {
//   dispatch(addOne());
// }

const numberEventHandler = (number) => {
  dispatch(applyNumber(number));
}

const operationHandler = (operator) => {
  dispatch(changeOperation(operator))
}

const clearHandler = () => {
  dispatch(clearDisplay())
}

const memoryHandlerAdd = () => {
  dispatch(memoryAdd());
}

const memoryHandlerApply = () => {
  dispatch(memoryApply())
}

const memoryHandlerClear = () => {
  dispatch(memoryClear())
}

console.log(state)
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={memoryHandlerAdd}/>
              <CalcButton value={"MR"} onClick={memoryHandlerApply}/>
              <CalcButton value={"MC"} onClick={memoryHandlerClear}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() =>{ numberEventHandler(1)
              }} />
              <CalcButton value={2} onClick={() =>{ numberEventHandler(2)}}/>
              <CalcButton value={3} onClick={() =>{ numberEventHandler(3)}}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() =>{ numberEventHandler(4)}}/>
              <CalcButton value={5} onClick={() =>{ numberEventHandler(5)}}/>
              <CalcButton value={6} onClick={() =>{ numberEventHandler(6)}}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() =>{ numberEventHandler(7)}}/>
              <CalcButton value={8} onClick={() =>{ numberEventHandler(8)}}/>
              <CalcButton value={9} onClick={() =>{ numberEventHandler(9)}}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() =>{ operationHandler("+")}}/>
              <CalcButton value={"*"} onClick={() =>{ operationHandler("*")}}/>
              <CalcButton value={"-"} onClick={() =>{ operationHandler("-")}}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearHandler}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
