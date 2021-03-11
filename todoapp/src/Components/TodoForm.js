import React, { useContext, useState } from "react";
import {
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import { v4 } from "uuid";
import { ADD_TODO } from "../Context/action.types";
import { TodoContext } from "../Context/TodoContext";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Enter Todo");
    }

    const todo = {
      todoString,
      id: v4(),
    };

    dispatch({
      type: ADD_TODO,
      payload: todo,
    });

    setTodoString("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            value={todoString}
            id="todo"
            onChange={(e) => {
              setTodoString(e.target.value);
            }}
            placeholder="Your next todo"
          />
          <InputGroupAddon addonType="prepend">
            <Button color="warning">Add</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
