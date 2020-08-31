import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import RegComp from './components/RegComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

class App extends Component {
  render() {
    return (
      <div className="App">

        <UserProvider value="Yeonkyu" >
          <ComponentC />
        </UserProvider>

        {/* <CounterTwo 
          render={ (count, incrementCount) => (
          <ClickCounterTwo count= {count} incrementCount={incrementCount}
          />)}
         />

        <CounterTwo 
          render={ (count, incrementCount) => (
          <HoverCounterTwo count= {count} incrementCount={incrementCount}
          />)}
         /> */}

        {/* <ClickCounterTwo />
        <HoverCounterTwo />
        <User render={ (isLoggedIn) => isLoggedIn ? 'Yeonkyu' : 'Guest' } /> */}


        {/* <ClickCounter name='Yeonkyu'/>
        <HoverCounter /> */}

        {/* <ErrorBoundary>
          <Hero heroName="Batman"/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman"/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker"/>
        </ErrorBoundary> */}
        

        {/* <PortalDemo />   클래스 App에 하위에 있지만 다른 div에 마운트 가능 */}

        {/* <FRParentInput /> */}

        {/* <FocusInput /> */}

        {/* <RefsDemo /> */}
        {/* <ParentComp /> */}

        {/* <Table /> */}
        {/* <FragmentDemo /> */}
        {/* <LifecycleA /> */}

        {/* <Form></Form> */}

        {/* <Welcome name="Bruce" heroName="Batman" primary={true}/>  */}

        {/* <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1> */}

        {/* <Stylesheet primary={true} /> */}
        {/* <Inline /> */}

        {/* <NameList primary={true}/> */}

        {/* <UserGreeting /> */}

        {/* <ParentComponent /> */}

        {/* <EventBind /> */}

        {/* <FunctionClick />
        <ClassClick /> */}

        {/* <Counter addValue="13" />
        <Greet name="Diana" heroName="Wonder women" >
          <p>This is Children props</p>
        </Greet>
        <Welcome name="Bruce" heroName="Batman" /> */}


        {/* <Message /> */}
        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is Children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman" >
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder women" />

        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder women"  /> */}

        {/*<Hello />*/}
      </div>
    )
  }
}

export default App;
