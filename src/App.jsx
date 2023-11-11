import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskListItem from './components/TaskListItem'
import { v4 as uuid4 } from 'uuid'

function App() {
  const [task, setTask] = useState([
    { id: uuid4(), title: 'react task management' },
    { id: uuid4(), title: 'reack useEffect' },
  ])

  const handleDelete = (id) => {
    const result = task.filter((item) => item.id !== id)
    setTask(result)

    console.log(result)
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <TaskForm />
        {task.map((item) => (
          <TaskListItem item={item} key={item.id} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  )
}

export default App
