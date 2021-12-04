import React from "react";

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
// const total_bayar = Snacks.reduce((total_harga, Snack) => {
//   return total_harga + Snack.harga;
// }, 0);

const total_bayar = Snacks.reduce(
  (total_harga, Snack) => total_harga + Snack.harga,
  0
);

const Map = () => {
  return (
    <div>
      <h2>Daftar Snack Dan Harga</h2>
      <table>
        <tr>
          <th>No</th>
          <th>Nama Snack</th>
          <th>jumlah</th>
          <th>Harga</th>
          <th>Total Harga</th>
        </tr>
        {Snacks.map((Snack, index) => (
          <tr>
            <td>{index + 1}.</td>
            <td>{Snack.nama}</td>
            <td>{Snack.jumlah}</td>
            <td>{Snack.harga}</td>
            <td>{Snack.jumlah * Snack.harga}</td>
          </tr>
        ))}
      </table>

      <h2>Filter Harga lebih dari 1000</h2>
      <ul>
        {Snacks.filter((Snack) => Snack.harga > 1000).map((Snack, index) => (
          <div>
            {index + 1}. {Snack.nama} - Harga {Snack.harga}
          </div>
        ))}
      </ul>

      <h2>Total Bayar : Rp.{total_bayar}</h2>
    </div>
  );
};
export default Map;
