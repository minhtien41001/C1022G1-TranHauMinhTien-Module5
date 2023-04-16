import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import * as ClassService from "../service/ClassService";
import * as StudentService from "../service/StudentService"

function CreateStudent() {
    const [classes, setClass] = useState([]);

    let navaigate = useNavigate()

    const findAllClass = async () => {
        const res = await ClassService.findAllClass()
        setClass(res)
    }

    useEffect(() => {
        findAllClass()
    }, [])

    return (
        <>
            <Formik
                initialValues={{  name: "", gender: '', age: "", classId: 1 }}

                validationSchema={Yup.object(
                    {
                        name: Yup.string().required("Khong duoc. de? trong'"),
                        gender: Yup.string().required("Khong duoc, de? trong'"),
                        age: Yup.string().required("Khong duoc. de? trong'"),
                    }
                )}

                onSubmit={(values) => {
                   
                    const createStudent = async () => {
                        await StudentService.save(values)
                        alert("Them moi' thanh` cong")
                        navaigate("/")
                    }
                    createStudent()
                }}
            >
                    <>
                        <h2 className="text-center fw-bold">Add new Student</h2>
                        <div className="d-flex justify-content-center">
                            <Form
                                className="w-50 border border-2 border-success p-3 rounded"
                                method="post"
                            >
                                <div className="form-group">
                                    <label htmlFor="name" className="h6">
                                        Name:
                                    </label>
                                    <div className="input-group">
                                        <Field
                                            type="text"
                                            id="name"
                                            className="form-control"
                                            placeholder="Input name"
                                            name="name"
                                        />
                                        <span className="input-group-text">
                                            <i className="fa-solid fa-person-circle-question" />
                                        </span>
                                    </div>
                                    <ErrorMessage name="name" />
                                </div>
                                <div className="mt-3 form-group">
                                    <label className="h6">Gender:</label>
                                    <div className="d-flex">
                                        <label className="d-block me-4">
                                            <Field
                                                type="radio"
                                                value="Nam"
                                                name="gender"
                                            />
                                            Male
                                            <i className="fa-solid fa-mars" />
                                        </label>
                                        <label className="d-block">
                                            <Field type="radio"
                                                value="Nu"
                                                name="gender" />
                                            Female
                                            <i className="fa-solid fa-venus" />
                                        </label>
                                    </div>
                                </div>
                                <div className="mt-3 form-group">
                                    <label htmlFor="age" className="h6">
                                        Age:
                                    </label>
                                    <div className="input-group">
                                        <Field
                                            type="text"
                                            id="age"
                                            className="form-control"
                                            placeholder="Input Age"
                                            name="age"
                                        />
                                        <span className="input-group-text">
                                            <i className="fa-solid fa-id-card" />
                                        </span>
                                        <ErrorMessage name="age" />
                                    </div>
                                </div>
                                <div className="mt-3 form-group">
                                    <label className="h6" htmlFor="classId">
                                        Class:
                                    </label>
                                    <div className="input-group">
                                        <Field as="select" name="classId" id="classId" className="form-control">
                                            {classes.map((classList, index) => (
                                                <option key={index} value={classList.id}>
                                                    {classList.className}
                                                </option>
                                            ))}
                                        </Field>
                                        <span className="input-group-text">
                                            <i className="fa-solid fa-ranking-star" />
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-3 text-center">
                                    <button className="btn btn-info btn-outline-success btn-sm border border-2 border-success text-dark" type="submit">
                                        -- Save <i className="fa-solid fa-floppy-disk" /> --
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </>

            </Formik>
        </>
    )
}

export default CreateStudent;