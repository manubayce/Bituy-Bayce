import logo from './logo.svg';
import './App.css';

function App() {

  const numeros = [1, 2, 3, 4]
  console.log(numeros)

  const nuevoNumeros = [...numeros, 5, 6]
  console.log(nuevoNumeros)

  const auto = {
    tipo: "vehiculo",
    marca: "BMW",
    modelo: "d15",
    año: 2018
  }

  console.log(auto)

  const nuevoAuto = {
    ...auto,
    año: 2019
  }

  console.log(nuevoAuto)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
