import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as BookService from "../service/BookService"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


function EditBook() {
    const [book, setBook] = useState();

    const [category, setCategory] = useState([]);

    const param = useParams();

    let navigate = useNavigate();

    const findAllCategory = async () => {
        const res = await BookService.findAllCategory()
        setCategory(res)
    }

    useEffect(() => {
        findAllCategory()
    }, [])

    useEffect(() => {
        const fetchBook = async () => {
            const res = await BookService.findById(param.id)
            setBook(res)
        }
        fetchBook();
    }, [])

    if (!book) {
        return null;
    }

    return (
        <>
            <Formik
                initialValues={{ id: book?.id, title: book?.title, quantity: book?.quantity, categoryId: book?.categoryId }}

                validationSchema={Yup.object(
                    {
                        title: Yup.string().required("Không được để trống!"),
                        quantity: Yup.number().required("Không được để trống!").min(100, "Số sách phải hơn 100 cuốn")
                    }
                )}

                onSubmit={(values, { setSubmitting }) => {
                    const update = async () => {
                        await BookService.edit(values)
                        setSubmitting();
                        navigate("/")
                    }
                    update();
                }
                }
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

export default EditBook;