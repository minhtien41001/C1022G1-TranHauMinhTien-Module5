// import React from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { LineWave } from 'react-loader-spinner'
import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function ContactForm() {
    return (
        <>
            <Formik
                initialValues={{ name: "", email: "",phone: "",message: "" }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Không được để trống"),
                    email: Yup.string()
                        .required("Không được để trống")
                        .email('phai dung dinh dang'),
                    phone: Yup.number()
                        .required("Không được để trống")
                })}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        toast("them moi thanh cong");

                    }, 3000)
                }}
            >

                {({ isSubmitting }) => (
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label">
                                Name:
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="exampleInputName"
                                name="name"
                            />
                            <ErrorMessage name="name" className="form-err" component="span" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail" className="form-label">
                                Email:
                            </label>
                            <Field
                                type="email"
                                className="form-control"
                                id="exampleInputEmail"
                                name="email"
                            />
                            <ErrorMessage name="email" className="form-err" component="span" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPhone" className="form-label">
                                Phone:
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="exampleInputPhone"
                                name="phone"
                            />
                            <ErrorMessage name="phone" className="form-err" component="span" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputMessage" className="form-label">
                                Message:
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="exampleInputMesssage"
                                name="message"
                            />
                            <ErrorMessage name="message" className="form-err" component="span" />
                        </div>
                        {
                            isSubmitting ?
                                <LineWave
                                    height="100"
                                    width="100"
                                    color="#4fa94d"
                                    ariaLabel="line-wave"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                    firstLineColor=""
                                    middleLineColor=""
                                    lastLineColor=""
                                />
                                :
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                        }

                    </Form>
                )}
            </Formik>
            <ToastContainer />
        </>
    )
}

export default ContactForm;