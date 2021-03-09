import React from "react";
// import logo from "./logos.png";
import "./App.css";
import { Button, Form, Alert, ListGroup } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, text: "", todos: [] };
  }

  addTodo = async () => {
    var text = this.state.text;
    var id = await uuidv4();
    var data = {
      id: id,
      text: text,
    };
    var state_data = this.state.todos;
    state_data[state_data.length] = data;
    this.setState({ todos: state_data });
    this.setState({ text: "" });
  };

  deleteItem(id) {
    const list = [...this.state.todos];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ todos: updatedList });
  }

  render() {
    return (
      <div className="container mt-5">
        <Alert variant="success">
          <Alert.Heading>
            <b>A TODO APP COOKED IN REACT</b>
          </Alert.Heading>
        </Alert>
        <Form.Group>
          <Form.Label>Add TODO</Form.Label>
          <Form.Control
            type="text"
            value={this.state.text}
            onChange={(text) => {
              this.setState({ text: text.target.value });
            }}
            placeholder="Enter TODO"
            required
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={() => this.addTodo()}>
          Submit
        </Button>
        <div className="mt-5">
          <ListGroup as="ul">
            {this.state.todos.map((item) => {
              return (
                <ListGroup.Item key={item.id} as="li">
                  {item.text}
                  <div className="text-right">
                    <Button
                      onClick={() => this.deleteItem(item.id)}
                      variant="danger"
                      type="button"
                    >
                      Delete
                    </Button>
                  </div>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default App;
