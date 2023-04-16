import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import * as BookService from "../service/BookService";
import * as CategoryService from "../service/CategoryService";

function Create(){
    const [category, setCategory] = useState([]);

    let navaigate = useNavigate()

    const findAllCategory = async () => {
        const res = await CategoryService.findAllCategory()
        setCategory(res)
    }

    useEffect(() => {
        findAllCategory()
    }, [])
    return(
        <>
        <Formik
                initialValues={{ name: "", categoryId: 1, date: "", amount: "" }}

                validationSchema={Yup.object(
                    {
                        name: Yup.string().required("Khong duoc. de? trong'"),
                        date: Yup.string().required("Khong duoc, de? trong'"),
                        amount: Yup.number().required("Khong duoc. de? trong'").min(1,"So' luong sach' phai lon' hon 0"),
                    }
                )}

                onSubmit={(values) => {
                   
                    const createBook = async () => {
                        await BookService.save(values)
                        alert("Them moi' thanh` cong")
                        navaigate("/")
                    }
                    createBook()
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
                    <label htmlFor="date" className="h6">
                    date:
                    </label>
                    <div className="input-group">
                        <Field
                            type="text"
                            id="date"
                            className="form-control"
                            placeholder="Input date"
                            name="date"
                        />
                        <span className="input-group-text">
                            <i className="fa-solid fa-id-card" />
                        </span>
                        <ErrorMessage name="date" />
                    </div>
                </div>

                <div className="mt-3 form-group">
                    <label htmlFor="amount" className="h6">
                    amount:
                    </label>
                    <div className="input-group">
                        <Field
                            type="text"
                            id="amount"
                            className="form-control"
                            placeholder="Input amount"
                            name="amount"
                        />
                        <span className="input-group-text">
                            <i className="fa-solid fa-id-card" />
                        </span>
                        <ErrorMessage name="amount" />
                    </div>
                </div>

                <div className="mt-3 form-group">
                    <label className="h6" htmlFor="categoryId">
                        Category:
                    </label>
                    <div className="input-group">
                        <Field as="select" name="categoryId" id="categoryId" className="form-control">
                            {category.map((categoryList, index) => (
                                <option key={index} value={categoryList.id}>
                                    {categoryList.categoryName}
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
export default Create;