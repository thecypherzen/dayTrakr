// Defines the main form component
// Used to take in new task items

import { useState, useEffect } from 'react'

export default function Form(){
    // Define state variables and handlers
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    // Creates a new task obj an adds to all tasks
    const addNewTask = function(e){
	if (task !== ''){
	    setTasks(
		[
		    ...tasks,
		    { task: task, id: getTaskId() }
		]);
	}
	e.preventDefault();
    }
    // Create a new task id
    const getTaskId = function(){
	return (
	    new Date().getTime().toString(36) +
		Math.random().toString(36).substr(2)
	);
    }

    return (
	<form onSubmit={(e) => addNewTask(e)}>
	  <input onChange={(e) => setTask(e.target.value)}
		 type="text" id="todo-input"
		 placeholder="Enter task"
		 value={task}/>
	  <button id="add-task-btn" className="btn">
	    Add Task
	  </button>
	</form>
    );
}
