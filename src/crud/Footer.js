import React from "react";
import { Card, Button } from "react-bootstrap";

const footer = () => {
  return (
    <div className="mt-3 text-white">
      <Card className="text-center" bg="dark">
        <Card.Header>Footer</Card.Header>
        <Card.Body>
          <Card.Title>Selamat Datang Di Toko Aneka Ragam Buku</Card.Title>
          <Card.Text>
            ... Silahkan Dipilih Bukunya Beli 1 Gratis Semuanya ...
          </Card.Text>
          <Button variant="primary">Beri Tanggapan</Button>
        </Card.Body>
        <Card.Footer className="text-white">
          Rizqi Ramandika Yang Paling Tamvan
        </Card.Footer>
      </Card>
    </div>
  );
};
export default footer;