// Defines the main form component
// Used to take in new task items

import { useState, useEffect } from 'react'
import TaskList from './TaskList'
import Form from './Form'

export default function Task(){
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
	    setTask("");
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
	<>
	  <Form setTask={setTask} addNewTask={addNewTask} task={task}/>
	  < TaskList tasks={ tasks }/>
	</>);
}
