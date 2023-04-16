import * as StudentService from "../service/StudentService";
import * as ClassService from "../service/ClassService";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Formik, Form, Field } from "formik";

function StudentList() {
    const [student, setStudent] = useState([]);
    const [classes, setClass] = useState([]);
    const [studentDelete, setStudentDelete] = useState(0);
    const [studentName, setStudentName] = useState('');

    const findAllStudent = async () => {
        const res = await StudentService.findAllStudent()
        setStudent(res)
    }

    const findAllClass = async () => {
        const res = await ClassService.findAllClass()
        setClass(res)
    }

    useEffect(() => {
        findAllClass()
        findAllStudent()
    }, [])

    const deleteStudent = async (id) => {
        await StudentService.deleteById(id)
        findAllStudent()
    }

    const getIdDelete = (id,name) => {
        setStudentDelete(id)
        setStudentName(name)
    }   


    return (
        <>
            <Formik
                initialValues={{ name: "", classId: "" }}
                onSubmit={(values) => {
                    const searchStudent = async () => {
                        const res = await StudentService.findAllStudent(values.name, values.classId)
                        setStudent(res)
                    }
                    searchStudent()
                }}
            >
                <Form>
                    <Field type='text' name='name' />

                    <div>
                        <Field as='select' name='classId'>
                            <option value="">----------------</option>
                            {
                                classes.map((classes, index) => (
                                    <option key={index} value={classes.id}>{classes.className}</option>
                                ))
                            }
                        </Field>

                    </div>
                    <div>
                        <button type='submit'>Search</button>
                    </div>
                </Form>

            </Formik>
            <h2 className="text-center fw-bold">List Student</h2>
            <a>
                <button className="btn btn-success btn-outline-secondary btn-sm">
                    <span className="fa-solid fa-house-medical text-light h5 my-auto me-1" />
                    <span className="text-light"><NavLink to={"students/create"}>Add new Customer</NavLink> </span>
                </button>
            </a>
            <table
                id="studentTable"
                className="table table-light table-striped table-bordered"
            >
                <thead>
                    <tr className="table-dark text-light">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Class</th>
                        <th className="text-center">Edit</th>
                        <th className="text-center">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((students, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{students.name}</td>
                            <td>{students.gender}</td>
                            <td>{students.age}</td>
                            <td>{classes.filter((classes) => classes.id == students.classId)[0]?.className}</td>
                            <td className="text-center">
                                <a >
                                    <button className="btn btn-primary btn-outline-secondary btn-sm">
                                        <span className="fa-solid fa-house-circle-exclamation text-light h6 m-auto px-2">
                                            <Link to={"students/edit/" + students.id}>Edit</Link>
                                        </span>
                                    </button>
                                </a>
                            </td>
                            <td class="text-center">
                                <a data-bs-toggle="modal"
                                    data-bs-target="#deleteStudent" >
                                    <button className="btn btn-danger btn-outline-secondary btn-sm" onClick={() => getIdDelete(students.id, students.name)}>
                                        <span className="fa-solid fa-person-circle-minus text-light h6 m-auto px-2">Delete</span>
                                    </button>
                                </a>
                            </td>
                        </tr>
                    ))

                    }
                </tbody>
            </table>

            <div>

                <div
                    className="modal fade"
                    id="deleteStudent"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Modal title
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">Do you want{studentName} to delete <span
                                className={"text-danger"}></span>?
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button data-bs-dismiss="modal" onClick={() => deleteStudent(studentDelete)} type="button"
                                    className="btn btn-primary">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default StudentList;