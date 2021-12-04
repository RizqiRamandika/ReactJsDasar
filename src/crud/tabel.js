import React from "react";
import { Table } from "react-bootstrap";

const tabel = ({ buku, editData, hapusData }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead bg="blue">
        <tr>
          <th>No</th>
          <th>Nama Buku</th>
          <th>Deskripsi</th>
          <th>Harga Buku</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {buku.map((buku, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{buku.nama}</td>
              <td>{buku.deskripsi}</td>
              <td>{buku.harga}</td>
              <td>
                <button className="btn btn-warning" onClick={() => editData(buku.id)}>Edit</button> || <button className="btn btn-danger" onClick={() => hapusData(buku.id)}>Hapus</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default tabel;
