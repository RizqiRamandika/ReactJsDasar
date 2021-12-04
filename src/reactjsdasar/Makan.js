import React from "react";

export default class StateProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      makan: "Bakso",
    };
  }

  gantiMakanan = (makanan_baru) => {
    this.setState({
      makanan: makanan_baru,
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.makan}</h2>
        <button onClick={() => this.gantiMakanan({ makan: "Soto" })}>
          Ganti Makanan
        </button>
      </div>
    );
  }
}
