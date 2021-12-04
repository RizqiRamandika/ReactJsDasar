import React from "react";

export default class StateProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobil: "Ferarri, Lamborgini, Supra",
    };
  }

  gantimobil = (mobil_baru) => {
    this.setState({
      mobil: mobil_baru,
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.mobil}</h2>
        <button onClick={() => this.gantimobil("Sedan, Kijang")}>
          Ganti mobil
        </button>
      </div>
    );
  }
}
