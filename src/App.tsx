import { Component } from "react";
import "./App.css";

/* Componente funzionale */
/* function App(){
  return <h1>Hello World</h1>
} */

/* Componente di classe */
/* class App extends Component{
  render() {
    return <h1>Hello World</h1> 
}} */

/* Componente funzionale ES6 */
/* const App = () => <h1>Hello World</h1> */

/* Componente funzionale con props (argomenti) */
/* const App = (props: {name: string}) => <h1>Hello {props.name}</h1> */

/* Componente di classe con props */

type AppPropsType = { name: string; bold?: boolean };
type AppStateType = { count: number };
class App extends Component<AppPropsType, AppStateType> {
  state = {
    count: 0,
  };

  render() {
    const { count } = this.state;
    const { name, bold } = this.props;
    const nameComponent = bold ? <b>{name}</b> : name;

    const increment = () => {
      this.setState({ count: count + 1 });
    };

    const decrement = () => {
      this.setState({ count: count - 1 });
    };

    const reset = () => {
      this.setState({ count: 0 });
    };

    return (
      <div>
        <h1>Hello {nameComponent}</h1>
        <h3>Counter: {count}</h3>
        <div className="row">
          <button onClick={() => increment()}>+</button>
          <button onClick={() => decrement()} disabled={count <= 0}>-</button>
        </div>
        <div className="row">
          <button onClick={() => reset()} disabled={count <= 0}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
