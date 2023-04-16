
import "bootstrap/dist/css/bootstrap.css";
import './FormCustomer.css';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as CustomerService from "../../service/CustomerService";

function CustomerCreate() {
    const [customerType,setCustomerType] = useState([]);

    // let navigate = useNavigate();

    const findAllCustomerType = async () => {
        const res = await CustomerService.findAllCustomerType()
        setCustomerType(res)
    }

    useEffect(() =>{
        findAllCustomerType()
    },[])

    return (
        <div className="mx-5 px-5 pt-3">
            <Formik
                initialValues={{ id: "", name: "", customerType: 1, dateOfBirth: "", idCard: "", phoneNumber: "", gender: 0, email: "", address: "" }}

                validationSchema={Yup.object(
                    {
                        name: Yup.string().required("Không được để trống!").matches(/^[A-Z][a-z]+(\s[A-Z][a-z]+)*$/, "Vui lòng nhập đúng tên"),
                        phoneNumber: Yup.string().required("Không được để trống!").matches(/^(090|091|\(84\)\\+90|\\(84\\)\\+91)[\d]{7}$/, "Số điện thoại không chính xác!"),
                        idCard: Yup.string().required("Không được để trống!").matches(/^([\d]{9}|[\d]{12})$/, "CMND không chính xác"),
                        email: Yup.string().email("Email không đúng định dạng"),
                        address: Yup.string().required("Không được để trống!")
                    }
                )}

                onSubmit={(values) => {
                    const createCustomer = async () => {
                        await CustomerService.saveCustomer(values)
                        alert("Them moi thanh cong")
                        // navigate("/")
                    }
                    createCustomer()
                }}
            >

                <>
                <h2 className="text-center fw-bold">Add new Customer</h2>
                <p className="text-center mt-3">
                    <a href="/">
                        <i className="fa-solid fa-house-chimney h5 mx-1" /> Back to HOME
                    </a>
                </p>
                <p className="text-center">
                    <a href="/customer/list">
                        <i className="fa-solid fa-backward" /> Back to Customer list
                    </a>
                </p>
                <div className="d-flex justify-content-center">
                    <Form
                        className="w-50 border border-2 border-success p-3 rounded"
                        method="post"
                    >
                        <div className="form-group">
                            <label htmlFor="name" className="h6">
                                Name:
                            </label>
                            <p style={{ color: "red" }} />
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
                            <label htmlFor="dateOfBirth" className="h6">
                                Date of Birth:
                            </label>
                            <p style={{ color: "red" }} />
                            <Field
                                type="date"
                                id="dateOfBirth"
                                className="form-control"
                                name="dateOfBirth"
                            />
                        </div>
                        <div className="mt-3 form-group">
                            <label className="h6">Gender:</label>
                            <div className="d-flex">
                                <label className="d-block me-4">
                                    <Field
                                        type="radio"
                                        defaultValue={1}
                                        name="gender"
                                        defaultChecked=""
                                    />{" "}
                                    Male
                                    <i className="fa-solid fa-mars" />
                                </label>
                                <label className="d-block">
                                    <Field type="radio" defaultValue={0} name="gender" /> Female
                                    <i className="fa-solid fa-venus" />
                                </label>
                                <p style={{ color: "red" }} />
                            </div>
                        </div>
                        <div className="mt-3 form-group">
                            <label htmlFor="idCard" className="h6">
                                Id card:
                            </label>
                            <p style={{ color: "red" }} />
                            <div className="input-group">
                                <Field
                                    type="text"
                                    id="idCard"
                                    className="form-control"
                                    placeholder="Input Id card"
                                    name="idCard"
                                />
                                <span className="input-group-text">
                                    <i className="fa-solid fa-id-card" />
                                </span>
                                <ErrorMessage name="idCard" />
                            </div>
                        </div>
                        <div className="mt-3 form-group">
                            <label htmlFor="phone" className="h6">
                                Phone number:
                            </label>
                            <p style={{ color: "red" }} />
                            <div className="input-group">
                                <Field
                                    type="text"
                                    id="phone"
                                    className="form-control"
                                    placeholder="Input Phone number"
                                    name="phoneNumber"
                                />
                                <span className="input-group-text">
                                    <i className="fa-solid fa-square-phone" />
                                </span>
                                <ErrorMessage name="phoneNumber" />
                            </div>
                        </div>
                        <div className="mt-3 form-group">
                            <label htmlFor="email" className="h6">
                                Email:
                            </label>
                            <p style={{ color: "red" }} />
                            <div className="input-group">
                                <Field
                                    type="text"
                                    id="email"
                                    className="form-control"
                                    placeholder="Input Email"
                                    name="email"
                                />
                                <span className="input-group-text">
                                    <i className="fa-solid fa-envelope-circle-check" />
                                </span>
                                <ErrorMessage name="email" />
                            </div>
                        </div>
                        <div className="mt-3 form-group">
                            <label htmlFor="address" className="h6">
                                Address:
                            </label>
                            <p style={{ color: "red" }} />
                            <div className="input-group">
                                <Field
                                    type="text"
                                    id="address"
                                    className="form-control"
                                    placeholder="Input Address"
                                    name="address"
                                />
                                <span className="input-group-text">
                                    <i className="fa-solid fa-map-location-dot" />
                                </span>
                            </div>
                            <ErrorMessage name="address" />
                        </div>
                        <div className="mt-3 form-group">
                            <label className="h6" htmlFor="customerType">
                                Customer Type:
                            </label>
                            <div className="input-group">
                                <Field as="select" name="customerType" id="customerType" className="form-control">
                                    {customerType.map((customerTypeList,index) => (
                                        <option key={index} value={customerTypeList.id}>
                                            {customerTypeList.name}
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
        </div>
    );
}

export default CustomerCreate;