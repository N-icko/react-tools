import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import TodoListItem from './TodoListItem';
import TodoListInput from './TodoListInput';

const TodoList = () => {
  const [todoTask, setTodoTask] = useState([]);
  return (
    <Box border={1} borderColor="primary.main" borderRadius={16}>
      <TodoListInput setTodoTask={setTodoTask} />
      <ul>
        <TodoListItem todoTask={todoTask} />
      </ul>
    </Box>
  );
};

export default TodoList;
