import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './TodoListInput.scss';

const TodoListInput = ({ setTodoTask }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    setTodoTask( prevState => [...prevState, text] );
    setText ('');
  };

  const handleTextChange = e => {
    setText(e.target.value);
  };

  return (
    <div className="todoListInputWrapper">
      <input
        placeholder="Type your task please"
        id="todo"
        className="todoInput"
        type="text"
        value={text}
        onChange={handleTextChange}
      />
      <button type="button" className="todoAddButton" onClick={handleAdd}>
        ADD
      </button>
    </div>
  );
};

TodoListInput.propTypes = {
  setTodoTask:  PropTypes.func,
};

export default TodoListInput;
