import React from "react";
import NavbarComponent from "./NavbarComponent";
import Form from "./Formulir";
import Footer from "./Footer";
import Table from "./tabel";

export default class Crud extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buku: [],
      nama: "",
      deskripsi: "",
      harga: "",
      id: "",
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.id === "") {
    this.setState({
      buku: [
        ...this.state.buku,
        {
          id: this.state.buku.length+1,
          nama: this.state.nama,
          deskripsi: this.state.deskripsi,
          harga: this.state.harga
        }
      ]
    })
  }else {
    const tidakDipilih = this.state.buku
    .filter((buku) => buku.id !== this.state.id)
    .map((filterBuku) => {
      return filterBuku
    })
    this.setState({
      buku:[
        ...tidakDipilih,
        {
          id: this.state.buku.length + 1,
          nama: this.state.nama,
          deskripsi: this.state.deskripsi,
          harga: this.state.harga,
        },
      ],
    });
    this.setState({
      nama: "",
      deskripsi: "",
      harga: "",
      id: "",
    })
  }
  }
  editData = (id) =>{
    const bukuYangDipilih = this.state.buku
    .filter((buku) => buku.id === id)
    .map((filterBuku) => {
      return filterBuku
    })
    this.setState({
      nama: bukuYangDipilih[0].nama,
      deskripsi: bukuYangDipilih[0].deskripsi,
      harga: bukuYangDipilih[0].harga,
      id: bukuYangDipilih[0].id,
    })
  }
  hapusData = (id) => {
    const bukuBaru = this.state.buku
    .filter((buku) => buku.id !== id)
    .map((filterBuku) => {
      return filterBuku
    })
    this.setState({
      buku : bukuBaru
    })
  }
  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <Table buku={this.state.buku} editData={this.editData} hapusData={this.hapusData} />
        </div>
        <div style={{ padding:'10px', borderRadius: "10px", width: "500px", backgroundColor: "black", color: "white"}} className="container mt-4">
          <Form {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>
        <Footer />
      </div>
    );
  }
}
