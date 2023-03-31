import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

const studentList = [
    {
        id: 1,
        studentName: "Tran Minh Tien",
        age: 21,
        address: "Ha Tinh"
    },
    {
        id: 2,
        studentName: "Tran Minh Tien",
        age: 21,
        address: "Ha Tinh"
    },
    {
        id: 3,
        studentName: "Tran Minh Tien",
        age: 21,
        address: "Ha Tinh"
    },
    {
        id: 4,
        studentName: "Tran Minh Tien",
        age: 21,
        address: "Ha Tinh"
    },
    {
        id: 5,
        studentName: "Tran Minh Tien",
        age: 21,
        address: "Ha Tinh"
    }
]
class StudentList extends Component{
    render(){
        return(
            <div className="mx-5 px-5 pt-3">
            <h1 className="text-center fw-bold">List Student</h1>
            <table id="studentTable" className="table table-light table-striped table-bordered">
              <thead>
              <tr className="table-dark text-light">
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
              </tr>
              </thead>
              <tbody>
              {studentList.map((student,index) => (
              <tr key = {index}>
                <td>{student.id}</td>
                <td>{student.studentName}</td>
                <td>{student.age}</td>
                <td>{student.address}</td>
              </tr>
              ))}
              </tbody>
            </table>
            </div>
        );
    }
}

export default StudentList;