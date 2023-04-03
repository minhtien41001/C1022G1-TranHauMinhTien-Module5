import { Component } from "react";

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todo: " ",
            todoList: []
        };
    }

    handleInput(value) {
        this.setState({
            todo: value
        });
    }

    handleAdd() {
        let todoArr = [...this.state.todoList, this.state.todo];
        this.setState({
            todo: "",
            todoList: todoArr
        });
    }

    handleRemove(index) {
        let todoArr = [...this.state.todoList];
        todoArr.splice(index, 1);
        this.setState({
            todoList: todoArr
        });
    }

    render() {
        return (
            <>
                <h2 >CONTRACT LIST</h2>
                <div>
                    <input value={this.state.todo}
                        onChange={(even) => this.handleInput(even.target.value)} />
                    <button onClick={() => this.handleAdd()}>Add Todo</button>
                    <table>
                        {this.state.todoList.map((todo1, index) => (
                            <tr key={index}>
                                <td>{todo1}</td>
                                <button onClick={() => this.handleRemove(index)}>Remove</button>
                            </tr>
                        ))}
                    </table>
                </div>
            </>
        )
    }
}

export default TodoList;