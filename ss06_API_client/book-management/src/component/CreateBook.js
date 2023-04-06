import { Field, Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import * as BookService from '../service/BookService';
import "bootstrap/dist/css/bootstrap.css";
import { LineWave } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";

function CreateBook() {
    let navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{ title: '', quantity: '' }}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        const createBook = async () => {
                            await BookService.save(values)
                            setSubmitting(false)
                            toast("thêm mới thành công")
                            navigate("/")
                        }
                        createBook()
                    }, 2000)

                }}>

                {({ isSubmitting }) => (
                    <Form>
                        <div className="mt-3 form-group">
                            <label htmlFor="title" className="h6">
                                Title:
                            </label>
                            <p style={{ color: "red" }} />
                            <div className="input-group">
                                <Field
                                    type="text"
                                    id="title"
                                    className="form-control"
                                    placeholder="Input title"
                                    name="title"
                                />
                                <span className="input-group-text">
                                    <i className="fa-solid fa-square-phone" />
                                </span>
                            </div>
                        </div>
                        <div className="mt-3 form-group">
                            <label htmlFor="quantity" className="h6">
                                quantity:
                            </label>
                            <p style={{ color: "red" }} />
                            <div className="input-group">
                                <Field
                                    type="text"
                                    id="quantity"
                                    className="form-control"
                                    placeholder="Input quantity"
                                    name="quantity"
                                />
                                <span className="input-group-text">
                                    <i className="fa-solid fa-square-phone" />
                                </span>
                            </div>
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
                        <ToastContainer />
                    </Form>
                )}

            </Formik>
        </>
    )
}

export default CreateBook;