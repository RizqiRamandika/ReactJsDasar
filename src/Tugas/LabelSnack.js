import React from "react";
import { Table, Button } from "react-bootstrap";

const Snacks = [
    {
      nama: "Cheetos",
      harga: 1500,
      jumlah: 50,
    },
    {
      nama: "Chitato",
      harga: 1000,
      jumlah: 20,
    },
    {
      nama: "Twistko",
      harga: 2000,
      jumlah: 30,
    },
    {
      nama: "JetZ",
      harga: 1000,
      jumlah: 100,
    },
    {
      nama: "Lays",
      harga: 1000,
      jumlah: 70,
    },
    {
      nama: "Komo",
      harga: 500,
      jumlah: 150,
    },
    {
      nama: "Potato",
      harga: 1000,
      jumlah: 30,
    },
    {
      nama: "Ring",
      harga: 1000,
      jumlah: 50,
    },
    {
      nama: "Better",
      harga: 2000,
      jumlah: 20,
    },
    {
      nama: "Kacang Garuda",
      harga: 5000,
      jumlah: 60,
    },
  ];

const tabel = () => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
      <tr>
          <th><center>No</center></th>
          <th><center>Nama Snack</center></th>
          <th><center>Jumlah</center></th>
          <th><center>Harga</center></th>
          <th><center>Total Harga</center></th>
          <th><center>Aksi</center></th>
        </tr>
      </thead>
      <tbody>
      {Snacks.map((Snack, index) => (
          <tr>
            <td><center>{index + 1}</center></td>
            <td><center>{Snack.nama}</center></td>
            <td><center>{Snack.jumlah}</center></td>
            <td><center>{Snack.harga}</center></td>
            <td><center>{Snack.jumlah * Snack.harga}</center></td>
            <td><center><Button variant="light" type="submit"> Ubah </Button> || <Button variant="light" type="submit"> Hapus </Button></center></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default tabel;
