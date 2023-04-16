import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as BookService from "../service/BookService";
import * as CategoryService from "../service/CategoryService";

function List() {
    const [category, setCategory] = useState([]);
    const [book, setBook] = useState([]);
    const [bookDelete, setBookDelete] = useState(0);
    const [bookName, setBookName] = useState('');

    const findAllBook = async () => {
        const res = await BookService.findAllBook()
        setBook(res)
    }

    const findAllCategory = async () => {
        const res = await CategoryService.findAllCategory()
        console.log(res);
        setCategory(res)
    }

    useEffect(() => {
        findAllBook()
        findAllCategory()
    }, [])

    const deleteBook = async (id) => {
        await BookService.deleteById(id)
        findAllBook()
    }

    const getIdDelete = (id, name) => {
        setBookDelete(id)
        setBookName(name)
    }


    return (
        <>
            <Formik
                initialValues={{ name: "", categoryId: "" }}
                onSubmit={(values) => {
                    const searchBook = async () => {
                        const res = await BookService.findAllBook(values.name, values.categoryId)
                        setBook(res)
                    }
                    searchBook()
                }}
            >
                <Form>
                    <Field type='text' name='name' />

                    <div>
                        <Field as='select' name='categoryId'>
                            <option value="">----------------</option>
                            {
                                category.map((categorys, index) => (
                                    <option key={index} value={categorys.id}>{categorys.categoryName}</option>
                                ))
                            }
                        </Field>

                    </div>
                    <div>
                        <button type='submit'>Search</button>
                    </div>
                </Form>
            </Formik>

            <h2 className="text-center fw-bold">List </h2>
            <a>
                <button className="btn btn-success btn-outline-secondary btn-sm">
                    <span className="fa-solid fa-house-medical text-light h5 my-auto me-1" />
                    <span className="text-light"> <NavLink to={"books/create"}>Add new </NavLink>  </span>
                </button>
            </a>
            <table
                id="bookTable"
                className="table table-light table-striped table-bordered"
            >
                <thead>
                    <tr className="table-dark text-light">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th className="text-center">Edit</th>
                        <th className="text-center">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {book.map((books, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{books.name}</td>
                            <td>{category.filter((category) => category.id == books.categoryId)[0]?.categoryName}</td>
                            <td>{books.date}</td>
                            <td>{books.amount}</td>
                            <td className="text-center">
                                <a >
                                    <button className="btn btn-primary btn-outline-secondary btn-sm">
                                        <span className="fa-solid fa-house-circle-exclamation text-light h6 m-auto px-2">
                                        <Link to={"books/edit/" + books.id}>Edit</Link>
                                        </span>
                                    </button>
                                </a>
                            </td>
                            <td class="text-center">
                                <a data-bs-toggle="modal"
                                    data-bs-target="#deleteBook" >
                                    <button className="btn btn-danger btn-outline-secondary btn-sm" onClick={() => getIdDelete(books.id, books.name)}>
                                        <span className="fa-solid fa-person-circle-minus text-light h6 m-auto px-2">Delete</span>
                                    </button>
                                </a>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

            <div>

                <div
                    className="modal fade"
                    id="deleteBook"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Modal title
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">Do you want to delete <span
                                className={"text-danger"}></span>?
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button data-bs-dismiss="modal" onClick={() => deleteBook(bookDelete)} type="button"
                                    className="btn btn-primary">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default List;