import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName) return;
    addTask({ id: Date.now(), name: taskName });
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder='Thêm nhiệm vụ mới'
      />
      <button type='submit'>Thêm nhiệm vụ</button>
    </form>
  );
};

export default TaskForm;