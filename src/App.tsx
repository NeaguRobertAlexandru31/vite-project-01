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

// Tipizzo le variabili in props e state per poi metterle sotto *1
type AppPropsType = { name: string; bold?: boolean };
type AppStateType = { count: number };
class App extends Component<AppPropsType, AppStateType> { // *1
  state = {
    count: 0,                       // Inizializzo variabile count a 0 
  };

  render() {
    const { count } = this.state;   // Assegno allo stato la variabile count
    const { name, bold } = this.props;
    const nameComponent = bold ? <b>{name}</b> : name;

    // Funzioni per incrementare, decrementare e resettare il counter
    const increment = () => {
      this.setState({ count: count + 1 });  // Setto lo stato di count a count+1 al click
    };

    const decrement = () => {
      this.setState({ count: count - 1 });  // Setto lo stato di count a count-1 al click
    };

    const reset = () => {
      if(count > 0){
        this.setState({ count: 0 });        // Setto lo stato di count a 0 al click, quando maggiore di 0 (if per controllo di sicurezza)
      }
    };

    return (
      <div>
        <h1>Hello {nameComponent}</h1>
        <h3>Counter: {count}</h3>                                               {/* Il counter mostra il valore della variabile */}
        <div className="row">
          <button onClick={() => increment()}>+</button>                        {/* Richiamo la funzione */}
          <button onClick={() => decrement()} disabled={count <= 0}>-</button>  {/* Richiamo la funzione ma disabilito allo 0 */}
        </div>
        <div className="row">
          <button onClick={() => reset()} disabled={count <= 0}>                {/* Richiamo la funzione ma disabilito allo 0 */}
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
