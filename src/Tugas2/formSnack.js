import React from "react";
import { Form, Card, Button } from "react-bootstrap";

const formSnack = ({ nama, qtt, harga, handleChange, handleSubmit, id }) => {
  return (
    <Card
      bg="primary"
      variant="primary"
      className="text-light"
      style={{ padding: "18px", borderRadius: "10px" }}
    >
      <h4 className="text-center">{id ? "Edit Data" : "Tambah Data"}</h4>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Nama
          </Form.Label>
          <Form.Control
            type="text"
            name="nama"
            placeholder="Nama Snack..."
            required
            value={nama}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            QTY
          </Form.Label>
          <Form.Control
            type="number"
            name="qtt"
            placeholder="qtt..."
            required
            value={qtt}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            harga
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="harga..."
            required
            name="harga"
            value={harga}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label column sm="2"></Form.Label>
          <center>
            <Button
              style={{ width: "100px" }}
              variant="outline-light"
              type="submit"
            >
              Tambah
            </Button>
          </center>
        </Form.Group>
      </Form>
    </Card>
  );
};
export default formSnack;
