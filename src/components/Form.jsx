// Defines the main form component
// Used to take in new task items

import { useState, useEffect } from 'react'

export default function Form(){
    // Define state variables and handlers
    const [taskInput, inputHandler] = useState("");
    const [allTasks, addNewTask] = useState([]);

    // Creates a new task obj an adds to all tasks
    const createNewTask = function(e){
	if (taskInput !== ''){
	    const val = [...allTasks,
			 {task: taskInput, id: getTaskId()}];
	    //console.log(val);
	    addNewTask(val);
	} else{
	    console.log("missing field");
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
	<form onSubmit={(e) => createNewTask(e)}>
	  <input onChange={(e) => inputHandler(e.target.value)}
		 type="text" id="todo-input"
		 placeholder="Enter task"
		 value={taskInput}/>
	  <button id="add-task-btn" className="btn">
	    Add Task
	  </button>
	</form>
    );
}
