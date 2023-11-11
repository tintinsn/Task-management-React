import React from 'react'

const TaskForm = () => {
  return (
    <>
      <h2>Task Management</h2>
      <form action="">
        <label htmlFor="">Task</label>
        <input type="text" className="text-input" />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default TaskForm
