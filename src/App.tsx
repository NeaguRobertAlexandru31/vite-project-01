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
class App extends Component<{
  name: string;
  bold?: boolean /* rotation?: number */;
}> {
  render() {
    const { name, bold /* rotation */ } = this.props;
    const nameComponent = bold ? <b>{name}</b> : name;
    /*     const rotationComponent = rotation ? <p style={{transform: }}></p> */

    const greeter = (/* name: string */) => {
      const message = `Hello ${name}`
      alert(message)
    };

    return <div>
        <h1>Hello {nameComponent}</h1>
        <button onClick={() => greeter()}>Count</button>
      </div>
    ;
  }
}

export default App;
