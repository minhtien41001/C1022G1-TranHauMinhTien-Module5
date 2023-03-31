import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class AddComponent extends Component {
  constructor() {
    super();
    this.state = {
      todoName: "",
      todoList: [],
    };
  }

  handleInputText(value) {
    this.setState({
      todoName: value,
    });
  }

  handleAddToList() {
    const newArr = [...this.state.todoList, this.state.todoName];

    this.setState({
      todoName: "",
      todoList: newArr,
    });
  }

  render() {
    let stt = 1;
    return (
      <>
        <div className="text-center">
          <h1 className="mb-5">Todo List</h1>

          <div>
            <input
              type="text"
              placeholder="Text"
              value={this.state.todoName}
              onChange={(event) => this.handleInputText(event.target.value)}
            />
            <button onClick={() => this.handleAddToList()}>Add</button>
          </div>
        </div>

        <div>
          <table className="table table-light table-striped table-bordered">
            <thead>
              <tr>
                <th >#</th>
                <th >Name</th>
              </tr>
            </thead>
            <tbody>
                {this.state.todoList.map((value, index) => (
                    <tr key={index}>
                        <td>{stt++}</td>
                        <td>{value}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default AddComponent;