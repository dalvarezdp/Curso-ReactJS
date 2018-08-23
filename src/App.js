import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ConditionalSection from "./sections/conditional";
import cars from "./data/cars.json";

// function Hello(props) {
//   return <h1 className="App-title">{props.title}</h1>;
// }

// const Hello = props => <h1 className="App-title">{props.title}</h1>;

class Hello extends Component {
  render() {
    return <h1 className="App-title">{this.props.title}</h1>;
  }
}

// ejemplo de uso de diferentes tipo de dato en un componente
class Text extends Component {
  render() {
    const {
      text,
      number,
      isActivated,
      arrayOfNumbers,
      multiply,
      objectWithInfo,
      title
    } = this.props;

    const textSegunBool = isActivated ? "On" : "Off";
    const mappedNumbers = arrayOfNumbers.map(multiply);

    return (
      <div>
        {title}
        <p>{text}</p>
        <p>{number}</p>
        <p>{textSegunBool}</p>
        <p>{mappedNumbers.join(", ")}</p>
        <p>{objectWithInfo.key}</p>
      </div>
    );
  }
}

class Title extends Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

// Establecer un valor por defecto en caso de no indicar valor al parametro.
Title.defaultProps = { text: "Titulo por defecto" };

// utilizar los estados de un componente
class Contador extends Component {
  // Se puede definir el valor del estate en el constructor o bien utilizar Class Field
  constructor(props) {
    super(props);
    this.state = { contador: this.props.contadorInicial };

    // actualizamos el valor del estado y reactivamente actualiza el dato en su visualizacion
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 });
    }, 1000);
  }

  // ejemplo de Class Field
  // state = { contador: 1 };

  // al cambiar el estado de un componente padre, renderiza tambien los hijos en este caso ContadorNumero
  render() {
    return <ContadorNumero numero={this.state.contador} />;
  }
}

Contador.defaultProps = {
  contadorInicial: 0
};

class ContadorNumero extends Component {
  render() {
    return <span>{this.props.numero}</span>;
  }
}

class CarItem extends Component {
  render() {
    const { car, id } = this.props;
    return (
      <li>
        <p>Key: {id}</p>
        <p>
          <strong>Nombre:</strong> {car.name}
        </p>
        <p>
          <strong>Marca:</strong> {car.company}
        </p>
      </li>
    );
  }
}

class App extends Component {
  render() {
    const numbers = [1, 1, 3, 4, 5];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello title="Hello from props" />
        </header>
        <Text
          arrayOfNumbers={[2, 3, 10]}
          objectWithInfo={{ key: "First Value", key2: "otherValue" }}
          number={2}
          multiply={number => number * 4}
          text="Texto en string"
          isActivated
          title={<h1>Este es el titulo</h1>}
        />
        <Title />
        <Contador contadorInicial={10} />
        <ConditionalSection />
        <h4>Trabajando con listas</h4>
        {numbers.map((number, index) => {
          return <p key={index}>Soy el número {number}</p>;
        })}
        <h4>Trabajando con listas con objetos</h4>
        <ul>
          {cars.map(car => {
            return <CarItem id={car.id} key={car.id} car={car} />;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
