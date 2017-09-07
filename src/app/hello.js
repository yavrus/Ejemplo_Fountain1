import React, {Component} from 'react';

class Titulo extends Component {
  state = {
    titulo: this.props.texto
  }

  handleModificarTitulo = () => {
    this.setState({titulo: this.state.titulo + '_'});
  }

  render() {
    return (
      <div>
        <h1>{this.state.titulo}</h1>
        <button onClick={this.handleModificarTitulo}>Haz click</button>
      </div>
    );
  }
}

Titulo.propTypes = {
  texto: React.PropTypes.string
};

class Juego extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0
    };
  }

  handleListenerClick = () => {
    this.setState({clicks: this.state.clicks + 1});
  }

  render() {
    return (
      <div>
        <p>Número de clicks: {this.state.clicks}</p>
        <button onClick={this.handleListenerClick}>Click</button>
      </div>
    );
  }
}

export class Hello extends Component {
  render() {
    const titulo = 'Esto es un titulo';
    return (
      <div>
        <h1>{'Hello world!'}</h1>
        <Titulo texto={titulo}/>
        <Titulo texto="Esto es otro titulo"/>
        <Juego/>
      </div>
    );
  }
}
