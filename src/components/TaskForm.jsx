import React from 'react'

const TaskForm = (props) => {
  const { title, setTitle, handleAddTask, editId } = props
  return (
    <>
      <h2>Task Management</h2>
      <form onSubmit={(e) => handleAddTask(e)}>
        <label htmlFor="">Task</label>
        <input type="text" className="text-input" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button type="submit">{editId ? 'UPDATE' : 'Submit'}</button>
      </form>
    </>
  )
}

export default TaskForm
