import { Component} from 'react';
import './App.css'

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
class App extends Component <{name: string, bold?: boolean,}>{
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
}

export default App;