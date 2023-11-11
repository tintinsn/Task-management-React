import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskListItem from './components/TaskListItem'
import { v4 as uuid4 } from 'uuid'
import { useEffect } from 'react'

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])
  const [title, setTitle] = useState('')
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleDelete = (id) => {
    const result = tasks.filter((item) => item.id !== id)
    setTasks(result)
    console.log(result)
  }

  const handleAddTask = (e) => {
    e.preventDefault()
    if (!title) {
      alert('Please add task')
    } else if (editId) {
      const updateTask = tasks.map((item) => {
        if (item.id === editId) {
          return { ...item, title: title }
        }
        return item
      })
      setTasks(updateTask)
      setTitle('')
      setEditId(null)
    } else {
      const newTask = { id: uuid4(), title: title }
      setTasks([...tasks, newTask])
      setTitle('')
    }
    console.log('save')
  }

  const handleEditTask = (id) => {
    setEditId(id)
    const findTask = tasks.find((item) => item.id === id)
    setTitle(findTask.title)
    // console.log(findTask)
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <TaskForm title={title} setTitle={setTitle} handleAddTask={handleAddTask} editId={editId} />
        {tasks.map((item) => (
          <TaskListItem item={item} key={item.id} handleDelete={handleDelete} handleEditTask={handleEditTask} />
        ))}
      </div>
    </div>
  )
}

export default App
