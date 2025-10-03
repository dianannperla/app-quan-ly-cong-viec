import React from 'react';

const TaskList = ({ tasks, removeTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.name} <button onClick={() => removeTask(task.id)}>Xóa</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;