import { useEffect, useState } from "react";
import * as BookService from "../service/BookService";
import "bootstrap/dist/css/bootstrap.css";
import { Link, NavLink } from "react-router-dom";

function BookList() {
    const [book, setBook] = useState([]);

    useEffect(() => {
        const bookList = async () => {
            const res = await BookService.findAll()
            setBook(res)
        }
        bookList()
    }, [])


    const findAllBook = async () =>{
        const res = await BookService.findAll()
        setBook(res)
    }

    const deleteBook = async (id) => {
        await BookService.deleteById(id)
        findAllBook()
        alert("xoa thanh cong !")
    }

    return (
        <>
            <button><NavLink to="book/create">Add new Book</NavLink></button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th className="text-center">Edit</th>
                        <th className="text-center">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {book.map((book,index) =>(
                        <tr key={index}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td><button><Link to={"book/edit/" + book.id}>Edit</Link></button></td>
                            <td><button onClick={() => deleteBook(book.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default BookList;