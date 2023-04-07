import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import * as BookService from "../service/BookService"
import { Formik,Form,Field } from "formik";

function EditBook() {
    const [book, setBook] = useState();
    const param = useParams();
    let navigate = useNavigate();

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
                initialValues={{id: book?.id, title: book?.title, quantity: book?.quantity }}
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
                    </div>

                    <div>
                        <label>Quantity</label>
                        <Field type="number" placeholder="Input Quantity" name="quantity" />
                    </div>

                    <button type="submit">Submit</button>
                </Form>

            </Formik>
        </>
    )
}

export default EditBook;