import React from "react";
import Operan from "./Operan";

export default class StateProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Makanan: "Bakso",
    };
  }

  gantiMakanan = (Makanan_baru) => {
    this.setState({
      Makanan: Makanan_baru,
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.Makanan}</h2>
        <button onClick={() => this.gantiMakanan("Soto")}>Ganti Makanan</button>
        <Operan makanan={this.state.Makanan} />
      </div>
    );
  }
}
