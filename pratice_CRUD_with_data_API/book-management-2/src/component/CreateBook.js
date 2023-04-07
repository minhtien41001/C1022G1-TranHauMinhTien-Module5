import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as BookService from "../service/BookService";
import * as Yup from "yup";

function CreateBook() {
    let navigate = useNavigate();

    return (
        <>
            <Formik
                initialValues={{ id: "", title: "", quantity: "" }}
                
                validationSchema={Yup.object(
                    {
                        title: Yup.string().required("Không được để trống!"),
                        quantity: Yup.string().required("Không được để trống!").min(100,"Số sách phải hơn 100 cuốn")
                    }
                )}

                onSubmit={(values, { setSubmitting }) => {
                    const createBook = async () => {
                        await BookService.save(values)
                        setSubmitting(false)
                        alert("Thêm mới thành công")
                        navigate("/")
                    }
                    createBook()
                }}
            >
                <Form>
                    <div>
                        <label>Title</label>
                        <Field type="text" placeholder="Input Title" name="title" />
                        <ErrorMessage name="title" />
                    </div>

                    <div>
                        <label>Quantity</label>
                        <Field type="number" placeholder="Input Quantity" name="quantity" />
                        <ErrorMessage name="quantity" />
                    </div>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    )
}
export default CreateBook;