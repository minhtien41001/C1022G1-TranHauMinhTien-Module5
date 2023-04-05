import { useState,useEffect } from "react";
import * as BookService from '../service/BookService';
import "bootstrap/dist/css/bootstrap.css";
function BookList() {

    const [book, setBook] = useState([])

    useEffect(() => {
        const bookList = async () => {
            const data = await BookService.findAll()
            setBook(data)
        }
        bookList()
    }, [])
    return (
        <>
            <a href="/facility/create">
                <button className="btn btn-success btn-outline-secondary btn-sm">
                    <span className="fa-solid fa-house-medical text-light h5 my-auto me-1" />
                    <span className="text-light"> Add new Book</span>
                </button>
            </a>
            <table
                id="customerTable"
                className="table table-light table-striped table-bordered"
            >
                <thead>
                    <tr className="table-dark text-light">
                        <th>Title</th>
                        <th>Quantity</th>
                        <th className="text-center">Edit</th>
                        <th className="text-center">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {book.map((books, index) => (
                        <tr key={index}>
                            <td>{books.title}</td>
                            <td>{books.quantity}</td>
                            <td className="text-center">
                                <a >
                                    <button className="btn btn-primary btn-outline-secondary btn-sm">
                                        <span className="fa-solid fa-house-circle-exclamation text-light h6 m-auto px-2">Edit</span>
                                    </button>
                                </a>
                            </td>
                            <td class="text-center">
                                <a data-bs-toggle="modal"
                                    data-bs-target="#deleteFacility" >
                                    <button className="btn btn-danger btn-outline-secondary btn-sm">
                                        <span className="fa-solid fa-person-circle-minus text-light h6 m-auto px-2">Delete</span>
                                    </button>
                                </a>
                            </td>
                        </tr>
                    ))

                    }
                </tbody>
            </table>
        </>
    )
}

export default BookList;