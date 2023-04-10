import { useEffect, useState } from "react";
import * as BookService from "../service/BookService";
import { Link, NavLink } from "react-router-dom";

function BookList(){
    const [book,setBook] = useState([]);
    const [category,setCategory] = useState([]);

    const findAllBook = async () =>{
        const res = await BookService.findAll()
        setBook(res)
    }

    const findAllCategory = async () => {
        const res = await BookService.findAllCategory()
        setCategory(res)
    }

    const deleteBook = async (id) => {
        await BookService.deleteById(id)
        findAllBook()
        alert("Xóa thành công!")
    }

    useEffect(() => {
        findAllBook()
        findAllCategory()
    },[])

    return(
        <>
        <button><NavLink to="books/create">Add new Book</NavLink></button>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>category</th>
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
                        <td>{category.filter((categoryList) => categoryList.id == book.categoryId)[0]?.categoryName}</td>
                        <td><button><Link to={"books/edit/" + book.id}>Edit</Link></button></td>
                        <td><button onClick={() => deleteBook(book.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
    )

}

export default BookList;