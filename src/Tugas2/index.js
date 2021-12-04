import React from "react";
import NavbarComponent from "./NavbarComponent";
import Label from "./LabelSnack";
import Footer from "./Footer";
import Form from "./formSnack";

export default class Crud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snack: [
        {
          nama: "Cheetos",
          harga: 1500,
          qtt: 50,
          id: 1,
        },
        {
          nama: "Chitato",
          harga: 1000,
          qtt: 20,
          id: 2,
        },
        {
          nama: "Twistko",
          harga: 2000,
          qtt: 30,
          id: 3,
        },
        {
          nama: "JetZ",
          harga: 1000,
          qtt: 100,
          id: 4,
        },
        {
          nama: "Lays",
          harga: 1000,
          qtt: 70,
          id: 5,
        },
        {
          nama: "Komo",
          harga: 500,
          qtt: 150,
          id: 6,
        },
        {
          nama: "Potato",
          harga: 1000,
          qtt: 30,
          id: 7,
        },
        {
          nama: "Ring",
          harga: 1000,
          qtt: 50,
          id: 8,
        },
        {
          nama: "Better",
          harga: 2000,
          qtt: 20,
          id: 9,
        },
        {
          nama: "Kacang Garuda",
          harga: 5000,
          qtt: 60,
          id: 10,
        },
      ],
      nama: "",
      harga: "",
      qtt: "",
      id: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.id === "") {
    this.setState({
      snack: [
        ...this.state.snack,
        {
          id: this.state.snack.length+1,
          nama: this.state.nama,
          qtt: this.state.qtt,
          harga: this.state.harga
        }
      ]
    })
  }else {
    const tidakDipilih = this.state.snack
    .filter((snack) => snack.id !== this.state.id)
    .map((filterSnack) => {
      return filterSnack
    })
    this.setState({
      snack:[
        ...tidakDipilih,
        {
          id: this.state.snack.length + 1,
          nama: this.state.nama,
          qtt: this.state.qtt,
          harga: this.state.harga,
        },
      ],
    });
    this.setState({
      nama: "",
      qtt: "",
      harga: "",
      id: "",
    })
  }
  }
  editData = (id) =>{
    const snackYangDipilih = this.state.snack
    .filter((snack) => snack.id === id)
    .map((filterSnack) => {
      return filterSnack
    })
    this.setState({
      nama: snackYangDipilih[0].nama,
      qtt: snackYangDipilih[0].qtt,
      harga: snackYangDipilih[0].harga,
      id: snackYangDipilih[0].id,
    })
  }
  hapusData = (id) => {
    const snackBaru = this.state.snack
    .filter((snack) => snack.id !== id)
    .map((filterSnack) => {
      return filterSnack
    })
    this.setState({
      snack : snackBaru
    })
  }
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   // console.log("Data: ", this.state)
  //   this.setState({
  //     snack: [
  //       ...this.state.snack,
  //       {
  //         id: this.state.snack.length + 1,
  //         nama: this.state.nama,
  //         harga: this.state.harga,
  //         qtt: this.state.qtt,
  //       },
  //     ],
  //   });
  //   this.setState({
  //     nama: "",
  //     qtt: "",
  //     harga: "",
  //     id: "",
  //   });
  // };
  render() {
    return (
      <div>
        <NavbarComponent />
        <h2 style={{padding:"10px"}}><center><b>TOKO ANEKA MACAM SNACK</b></center></h2>
        {/* <div className="container mt-4">
          <Row>
          <Col>
              <div>
                <Form
                  {...this.state}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                />
              </div>
            </Col> */}
              {/* <h2><center>TAMBAH DATA</center></h2>
              <Form
                {...this.state}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            </Col> */}
            {/* <Col>
              <Label snack={this.state.snack} editData={this.editData} hapusData={this.hapusData} />
            </Col>
          </Row>
        </div> */}
        <div className="container mt-4">
          <Form {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>
        <div className="container mt-4" style={{width:"1135px"}}>
          <Label snack={this.state.snack} editData={this.editData} hapusData={this.hapusData} />
        </div>
        <Footer />
      </div>
    );
  }
}
