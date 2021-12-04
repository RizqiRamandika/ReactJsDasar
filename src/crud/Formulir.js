import React from "react";
import { Form, Button } from "react-bootstrap";

const Formulir = ({ nama, deskripsi, harga, handleChange, handleSubmit, id }) => {
  return (
    <div>
      <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="nama">
        <Form.Label>Nama Buku</Form.Label>
        <Form.Control
          type="text"
          name="nama"
          value={nama}
          onChange={(event) => handleChange(event)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="deskripsi">
        <Form.Label>Deskripsi</Form.Label>
        <Form.Control
          as="textarea"
          name="deskripsi"
          value={deskripsi}
          onChange={(event) => handleChange(event)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="harga">
        <Form.Label>Harga Buku</Form.Label>
        <Form.Control
          type="number"
          name="harga"
          value={harga}
          onChange={(event) => handleChange(event)} />
      </Form.Group>

      <center><Button variant="light" type="submit">
        Tambahkan
      </Button></center>
    </Form>
    </div>
  );
};
export default Formulir;
