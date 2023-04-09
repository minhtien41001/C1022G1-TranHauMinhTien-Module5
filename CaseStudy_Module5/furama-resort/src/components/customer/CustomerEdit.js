import "bootstrap/dist/css/bootstrap.css";
import './FormCustomer.css';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";


function CustomerEdit() {
    return (
        <>
            <div
                className="container-fluid bg-gray-500 d-flex header"
                style={{ height: 100 }}
            >
                <img
                    className="h-100 p-4"
                    src="https://www.furama.com/images/LOGOFurama_4C_Normal.png"
                    alt=""
                />
                <img
                    className="ms-5 ps-5"
                    src="https://furamavietnam.com/wp-content/uploads/2019/02/Ariyana-Tourism-Complex-02-2.png"
                    alt=""
                />
                <div className="container-fluid text-end my-4 me-4">
                    <span className="badge text-bg-warning mt-3">Trần Hậu Minh Tiến</span>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid mx-5">
                    <a className="navbar-brand font-weight-bold" href="/">
                        Home
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown ms-3">
                                <a className="nav-link text-dark" href="/employee" role="button">
                                    Employee
                                </a>
                            </li>
                            <li className="nav-item dropdown ms-3">
                                <a
                                    className="nav-link text-dark"
                                    href="/customer/list"
                                    role="button"
                                >
                                    Customer
                                </a>
                            </li>
                            <li className="nav-item dropdown ms-3">
                                <a
                                    className="nav-link text-dark"
                                    href="/facility/list"
                                    role="button"
                                >
                                    Facility
                                </a>
                            </li>
                            <li className="nav-item dropdown ms-3">
                                <a
                                    className="nav-link text-dark"
                                    href="/contract/list"
                                    role="button"
                                >
                                    Contract
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex my-2" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                <i className="fa-solid fa-magnifying-glass" />
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="mx-5 px-5 pt-3">
            <Formik
            initialValues={{id: "", name: "",customerCode: "", customerType: "",dateOfBirth: "", idCard: "", phoneNumber: "",gender: "", email: "", address: ""}}

            validationSchema={Yup.object(
                {
                    name: Yup.string().required("Không được để trống!").matches(/^[A-Z][a-z]+(\s[A-Z][a-z]+)*$/, "Vui lòng nhập đúng tên"),
                    phoneNumber: Yup.string().required("Không được để trống!").matches(/^(090|091|\(84\)\\+90|\\(84\\)\\+91)[\d]{7}$/,"Số điện thoại không chính xác!"),
                    idCard: Yup.string().required("Không được để trống!").matches(/^([\d]{9}|[\d]{12})$/,"CMND không chính xác"),
                    email: Yup.string().email("Email không đúng định dạng"),
                    address: Yup.string().required("Không được để trống!")
                }
            )}
            >

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
                    action="/customer/save"
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
                        <ErrorMessage name="name"/>
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
                            <ErrorMessage name="idCard"/>
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
                            <ErrorMessage name="phoneNumber"/>
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
                            <ErrorMessage name="email"/>
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
                        <ErrorMessage name="address"/>
                    </div>
                    <div className="mt-3 form-group">
                        <label className="h6" htmlFor="customerType">
                            Customer Type:
                        </label>
                        <p style={{ color: "red" }} />
                        <div className="input-group">
                            <select
                                id="customerType"
                                className="form-control"
                                name="customerType"
                            >
                                <option />
                            </select>
                            <span className="input-group-text">
                                <i className="fa-solid fa-ranking-star" />
                            </span>
                        </div>
                    </div>
                    <div className="mt-3 text-center">
                        <button className="btn btn-info btn-outline-success btn-sm border border-2 border-success text-dark">
                            -- Save <i className="fa-solid fa-floppy-disk" /> --
                        </button>
                    </div>
                </Form>
            </div>
            </Formik>
            </div>
            <div className="container-fluid text-center footer" style={{ height: 50 }}>
                <p className="text-light pt-2">©FURAMA - officially operated in 1997.</p>
            </div>
        </>

    )
};

export default CustomerEdit