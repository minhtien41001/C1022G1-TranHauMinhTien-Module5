import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";

const students = [
  {
    name: "Trần Minh Tiến",
    age: 22,
    adress: "Hà Tĩnh"
  },
  {
    name: "Trương Vô Kỵ",
    age: 18,
    adress: "Võ Đang"
  },
  {
    name: "Kiều Phong",
    age: 50,
    adress: "Cái Bang"
  },
  {
    name: "Mộ Dung Phục",
    age: 22,
    adress: "Nam Giang"
  }
];

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div class="mx-5 px-5 pt-3">
  <h1 class="text-center fw-bold">List Student</h1>
  <table id="studentTable" class="table table-light table-striped table-bordered">
    <thead>
    <tr class="table-dark text-light">
      <th>Name</th>
      <th>Age</th>
      <th>Address</th>
    </tr>
    </thead>
    <tbody>
    {students.map((student,index) => (
    <tr key = {index}>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.adress}</td>
    </tr>
    ))}
    </tbody>
  </table>
  </div>
);

