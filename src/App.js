import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import UnderstdProps from "./components/UnderstdProps";
import Dynamicprops_state from "./components/Dynamicprops_state";

function App() {
  return (
    <div className="App">
      {/* <Greet/>
      <Welcome/>
      <Hello/> */}

      {/* <UnderstdProps name="Bruce" sname="Wayne" />

      <UnderstdProps name="Tony" sname="Stark">
        <button>Submit</button>
      </UnderstdProps>

      <UnderstdProps name="Steve" sname="Rogers">
        <p>This is children which we can call using props.children</p>
      </UnderstdProps>

      <h6>*************************************************</h6>

      <Welcome name ="Props accessing from the class component"/>
      <Welcome name ="Props are immutable"/> */}

      <Dynamicprops_state/>


    </div>
  );
}

export default App;
