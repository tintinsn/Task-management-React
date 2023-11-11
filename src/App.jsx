import './App.css'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskListItem from './components/TaskListItem'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <TaskForm />
        <TaskListItem />
      </div>
    </div>
  )
}

export default App
