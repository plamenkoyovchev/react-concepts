import React from "react";
import "./App.css";
import Counter from "./patterns-and-concepts/set-state/Counter";
import ClickCounter from "./patterns-and-concepts/hoc/ClickCounter";
import HoverCounter from "./patterns-and-concepts/hoc/HoverCounter";
import User from "./patterns-and-concepts/render-props/User";
import CounterWithRenderProps from "./patterns-and-concepts/render-props/CounterWithRenderProps";
import HookCounter from "./hooks/state/HookCounter";
import TextInput from "./patterns-and-concepts/refs/TextInput";
import Form from "./patterns-and-concepts/forms/Form";
import LifecycleA from "./patterns-and-concepts/lifecycle-methods/mounting/LifecycleA";
import ParentComponent from "./patterns-and-concepts/pure-components/ParentComponent";
import Hero from "./patterns-and-concepts/errors/Hero";
import ErrorBoundary from "./patterns-and-concepts/errors/ErrorBoundary";
import ComponentC from "./patterns-and-concepts/context/ComponentC";
import {
  UserProvider,
  UserContext,
} from "./patterns-and-concepts/context/userContext";
import Phonebook from "./hooks/state/Phonebook";
import NumbersList from "./hooks/state/NumbersList";
import ClassCounter from "./hooks/effect/ClassCounter";
import HooksCounter from "./hooks/effect/HooksCounter";
import ClassMouse from "./hooks/effect/ClassMouse";
import HooksMouse from "./hooks/effect/HooksMouse";
import ComponentZ from "./hooks/context/ComponentZ";
import DataFetchingWithUseState from "./hooks/data-fetching/DataFetchingWithUseState";
import DataFetchingWithUseReducer from "./hooks/data-fetching/DataFetchingWithUseReducer";
import ParentContainer from "./hooks/useCallback/ParentContainer";
import ParentContainerWithUseCallback from "./hooks/useCallback/ParentContainerWithUseCallback";
import CounterWithUseMemo from "./hooks/useMemo/CounterWithUseMemo";
import CounterWithCustomHook from "./hooks/custom-hooks/CounterWithCustomHook";
import FocusInput from "./hooks/useRef/FocusInput.jsx";

const App = () => {
  return (
    <div className="App">
      <h3>Class implementation</h3>
      <div>
        <h4>Normal counter implementation</h4>
        <Counter />
      </div>
      <div>
        <h4>Class counter implementation</h4>
        <ClassCounter />
      </div>
      <div>
        <h4>Shared functionality with withCounter HOC component</h4>
        <ClickCounter name="Plamen" />
        <HoverCounter />
      </div>
      <div>
        <h4>Pass props as function</h4>
        <User render={(isLoggedIn) => (isLoggedIn ? "Plamen" : "Guest")} />
      </div>
      <div>
        <h4>Render props pattern</h4>
        <CounterWithRenderProps
          render={(count, increment) => (
            <Counter count={count} increment={increment} />
          )}
        />
      </div>
      <div>
        <h4>Refs, focus on input element</h4>
        <TextInput />
      </div>
      <div>
        <h4>Form handling</h4>
        <Form />
      </div>
      <div>
        <h4>Mounting lifecycles - mounting phase</h4>
        <LifecycleA />
      </div>
      <div>
        <h4>Updating lifecycles - updating phase</h4>
      </div>
      <div>
        <h4>Pure Components & React.memo</h4>
        <ParentComponent />
      </div>
      <div>
        <h4>Error Boundary</h4>
        <ErrorBoundary>
          <Hero name="Spider man" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero name="plamen" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero name="Batman" />
        </ErrorBoundary>
      </div>
      <div>
        <h4>Context provider & consumer</h4>
        <UserProvider value="plamenyovchev">
          <ComponentC />
        </UserProvider>
      </div>
      <div>
        <h4>Register event handlers in Class Components</h4>
        <ClassMouse />
      </div>
      <hr />
      <h3>Hooks implementation</h3>
      <div>
        <h4>Counter</h4>
        <HookCounter />
      </div>
      <div>
        <h4>useState with object</h4>
        <Phonebook />
      </div>
      <div>
        <h4>useState with array</h4>
        <NumbersList />
      </div>
      <div>
        <h4>useEffect</h4>
        <HooksCounter />
      </div>
      <div>
        <h4>useEffect - to register event handlers + cleanup</h4>
        <HooksMouse />
      </div>
      <div>
        <h4>useContext - to consume React.createContext()</h4>
        <UserContext.Provider value={"plamenkooo"}>
          <ComponentZ />
        </UserContext.Provider>
      </div>
      <div>
        <h4>Data fetching - with useState</h4>
        <DataFetchingWithUseState />
      </div>
      <div>
        <h4>Data fetching - with useReducer</h4>
        <DataFetchingWithUseReducer />
      </div>
      <div>
        <h4>Rendering without using useCallback</h4>
        <ParentContainer />
      </div>
      <div>
        <h4>Rendering with useCallback</h4>
        <ParentContainerWithUseCallback />
      </div>
      <div>
        <h4>useMemo</h4>
        <CounterWithUseMemo />
      </div>
      <div>
        <h4>useRef to focus on input element</h4>
        <FocusInput />
      </div>
      <div>
        <h4>Custom Hooks - useCounter</h4>
        <CounterWithCustomHook />
      </div>
    </div>
  );
};

export default App;
