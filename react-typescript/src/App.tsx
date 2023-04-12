import { LoggedIn } from "./components/state/LoggedIn";
import { Button } from "./components/props/Button";
import {ExampleOne} from "./components/redux/ExampleOne";
import { ExampleSecond } from "./components/redux/ExampleSecond";
import { InputRef } from "./components/refs/InputRef";
import { Counter } from "./components/state/Counter";

function App() {
  return (
    <div className="App">
      <h1>Ví dụ về useState</h1>
      <LoggedIn name='loi'/>
      <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event, id)
        }}
      /> 

      <h1>Ví dụ useRef</h1>
      <InputRef />

      <h1>Ví dụ về useReducer</h1>
      <Counter />

      <h1>Ví dụ về Redux</h1>
      <ExampleOne />
      <ExampleSecond />
    </div>
  );
}

export default App;
