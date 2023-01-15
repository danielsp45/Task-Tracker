import React from 'react'
import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "Doctor's appointment",
        day: "Feb 5th at 2:30 pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Basketball game",
        day: "January 7th at 4:00 pm",
        reminder: false,
      }
    ]
  )

  function onAddButton() {
    setShowAddTask(!showAddTask)
  }

  function addTask(task) {
    const id = Math.floor(Math.random() * 1000) + 1
    const new_task = { id, ...task }
    setShowAddTask(false)
    setTasks([...tasks, new_task])
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  function toggleReminder(id) {
    setTasks(tasks.map((task) => task.id === id ? 
      { ...task, reminder: !task.reminder } 
      : 
      task)
    )
    console.log('toggled reminder')
  }

  return (
    <div className="container">
      <Header onClick={onAddButton} showAddTask={showAddTask}/>
      {showAddTask ? <AddTask onAdd={addTask}/> : <></>}
      {tasks.length > 0 ? 
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>)
        :
        ('No Tasks to show')
      }
    </div>
  );
}


export default App;
