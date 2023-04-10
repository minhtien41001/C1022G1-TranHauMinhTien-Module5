import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as BookService from "../service/BookService";
import * as Yup from "yup";

function CreateBook() {
    const [category, setCategory] = useState([]);

    let navigate = useNavigate();

    const findAllCategory = async () => {
        const res = await BookService.findAllCategory()
        setCategory(res)
    }

    useEffect(() => {
        findAllCategory()
    }, [])

    return (
        <>
            <Formik
                initialValues={{ id: "", title: "", quantity: "",categoryId: 1 }}

                validationSchema={Yup.object(
                    {
                        title: Yup.string().required("Không được để trống!"),
                        quantity: Yup.number().required("Không được để trống!").min(100, "Số sách phải hơn 100 cuốn")
                    }
                )}

                onSubmit={(values, { setSubmitting }) => {
                    values.categoryId = parseInt(values.categoryId)
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

                    <div>
                        <label>Category</label>
                        <Field as="select" name="categoryId">
                            {
                                category.map((categoryList, index) => (
                                    <option key={index} value={categoryList.id}>
                                        {categoryList.categoryName}
                                    </option>
                                ))
                            }
                        </Field>
                    </div>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    )
}

export default CreateBook;