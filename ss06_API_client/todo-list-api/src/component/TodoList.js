import { useEffect, useState } from "react";
import * as todoService from './service/todoService'
import { ToastContainer, toast } from "react-toastify";
import { Form, Formik,Field } from "formik";
import { LineWave } from 'react-loader-spinner';
import "bootstrap/dist/css/bootstrap.css";


function TodoList() {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        const todoList = async () => {
            const data = await todoService.findAll()
            setTodo(data)
        }
        todoList()
    }, [])

    return (
        <>
            <Formik
                initialValues={{ todo: "" }}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        const addTodo = async () => {
                            await todoService.save(values)
                            setSubmitting(false);
                            toast("Thêm mới thành công!");
                        }
                        addTodo()
                    }, 2000)
                }}
            >

                {({ isSubmitting }) => (
                    <Form>
                        <h1>Todo List</h1>
                        <div>
                            <Field
                                type="text"
                                className="form-control"
                                id="exampleInputEmail"
                                name="todo"
                            />
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

                    </Form>
                )}

            </Formik>
            <ToastContainer />

            <ul>
                {todo.map((todoList, index) => (
                    <li key={index}>{todoList.todo}</li>
                ))
                }
            </ul>


        </>
    )
}

export default TodoList;