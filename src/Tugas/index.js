import React from "react";
import NavbarComponent from "./NavbarComponent";
import Label from "./LabelSnack";
import Footer from "./Footer"
import Form from "./formSnack";

export default class Crud extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "silver" }}>
        <NavbarComponent />
        <div className="container mt-4">
          <h2><center>TAMBAH DATA</center></h2>
          <Form />
        </div>
        <div className="container mt-4">
          <Label />
        </div>
        <Footer />
      </div>
    );
  }
}
