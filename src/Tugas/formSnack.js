import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const formSnack = () => {
  return (
    <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="nama">
      <Form.Label style={{ marginLeft: "250px" }}><b>Nama Snack</b></Form.Label>
      <Form.Control type="text" required />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridharga">
      <Form.Label style={{ marginLeft: "250px" }}><b>Jumlah</b></Form.Label>
      <Form.Control type="text" required />
    </Form.Group>
  </Row>
  
  <Row className="mb-3">
    <Form.Group as={Col} controlId="harga">
    <center><Form.Label><b>Harga</b></Form.Label></center>
      <Form.Control type="text" required />
    </Form.Group>
  </Row>

  <center><Button variant="dark" type="submit">
    Tambah
  </Button></center>
</Form>
  );
};
export default formSnack;
