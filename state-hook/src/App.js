import React, { Component, useReducer } from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import ComponentB from './components/ComponentB';
import ComponentA from './components/ComponentA';

export const CountContext = React.createContext()

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch}}>
    <div className="App">
      Count - {count}
      <ComponentA />
      <ComponentB />
      <ComponentC />
      {/* <CounterThree /> */}
      {/* <CounterTwo /> */}
      {/* <CounterOne /> */}

      {/* <UserContext.Provider value={'Yeonkyu'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <DataFetching /> */}

      {/* <IntervalClassCounter />
      <IntervalHookCounter /> */}
      
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <ClassMouse /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
    </div>
    </CountContext.Provider>
  );
}

export default App;
