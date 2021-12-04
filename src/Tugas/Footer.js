import React from "react";
import { Card, Button } from "react-bootstrap";

const footer = () => {
  return (
    <div className="mt-3 text-white">
      <Card className="text-center" bg="dark">
        <Card.Header>Footer</Card.Header>
        <Card.Body>
          <Card.Title>Selamat Datang Di Toko Aneka Macam Snack</Card.Title>
          <Card.Text>
            ... Silahkan Dipilih Snacknya Beli 1 Gratis Semuanya ...
          </Card.Text>
          <Button variant="primary">SEMOGA ANDA KERACUNAN !!!</Button>
        </Card.Body>
        <Card.Footer className="text-white">
          Rizqi Ramandika Yang Paling Tamvan
        </Card.Footer>
      </Card>
    </div>
  );
};
export default footer;