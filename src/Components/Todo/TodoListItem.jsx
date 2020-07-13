import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ todoTask }) => (
  <>
    {todoTask.map((item, id = 0) => (
      <li key={id + 1}>{item}</li>
    ))}
  </>
);

TodoListItem.propTypes = {
  todoTask: PropTypes.arrayOf(PropTypes.string),
};

export default TodoListItem;
