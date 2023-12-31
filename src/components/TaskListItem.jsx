import React from 'react'
import './TaskListItem.css'

const TaskListItem = (props) => {
  const { item, handleDelete, handleEditTask } = props
  return (
    <>
      <div className="list-item">
        <p>{item.title}</p>
        <div className="btn-con">
          <button onClick={() => handleDelete(item.id)}>DELETE</button>
          <button onClick={() => handleEditTask(item.id)}>EDIT</button>
        </div>
      </div>
    </>
  )
}

export default TaskListItem
