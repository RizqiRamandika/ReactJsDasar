import React from "react";
import { Table } from "react-bootstrap";

const tabel = ({snack, editData, hapusData}) => {
  return (
    <Table className="text-center" striped bordered hover variant="primary" border="2px solid black">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Snack</th>
          <th>Qtt</th>
          <th>Harga Snack</th>
          <th>Total Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      {/* <tbody>
        {snack.map((snack, index) => {
          return(
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{snack.nama}</td>
          <td>{snack.qtt}</td>
          <td>Rp. {snack.harga}</td>
          <td>Rp.{ snack.qtt * snack.harga}</td>
          <td>
          <button className="btn btn-warning" onClick={() => editData(snack.id)}>Edit</button>
          <button className="btn btn-danger" onClick={() => hapusData(snack.id)}>Hapus</button>
          </td>
        </tr>
          );
        })}
      </tbody> */}
      <tbody>
        {snack.map((snack, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{snack.nama}</td>
              <td>{snack.qtt}</td>
              <td>{snack.harga}</td>
              <td>Rp.{ snack.qtt * snack.harga}</td>
              <td>
                <button className="btn btn-primary" onClick={() => editData(snack.id)}>Edit</button> || <button className="btn btn-primary" onClick={() => hapusData(snack.id)}>Hapus</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default tabel;
