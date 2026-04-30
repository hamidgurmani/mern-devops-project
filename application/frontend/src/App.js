import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3500';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    axios.get(`${API}/api/tasks`).then(res => setTasks(res.data));
  }, []);

  const addTask = async () => {
    if (!task.trim()) return;
    const res = await axios.post(`${API}/api/tasks`, { task });
    setTasks([...tasks, res.data]);
    setTask('');
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/api/tasks/${id}`);
    setTasks(tasks.filter(t => t._id !== id));
  };

  const toggleTask = async (id, completed) => {
    const res = await axios.put(`${API}/api/tasks/${id}`, { completed: !completed });
    setTasks(tasks.map(t => t._id === id ? res.data : t));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', fontFamily: 'Arial' }}>
      <h1>MERN Todo App</h1>
      <div>
        <input
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="Enter a task"
          style={{ padding: '8px', width: '70%' }}
        />
        <button onClick={addTask} style={{ padding: '8px 16px', marginLeft: '8px' }}>
          Add
        </button>
      </div>
      <ul style={{ marginTop: '20px' }}>
        {tasks.map(t => (
          <li key={t._id} style={{ marginBottom: '10px' }}>
            <span
              onClick={() => toggleTask(t._id, t.completed)}
              style={{ textDecoration: t.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            >
              {t.task}
            </span>
            <button
              onClick={() => deleteTask(t._id)}
              style={{ marginLeft: '10px', color: 'red' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
