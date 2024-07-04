// Defines the main form component
// Used to take in new task items

import { useState, useEffect } from 'react'
import TaskList from './TaskList'
import Footer from './Footer'
import Form from './Form'
import styles from './task.module.css'


export default function Task(){
    // Define state variables and handlers
    const [task, setTask] = useState({ task:"" });
    const [tasks, setTasks] = useState([]);

    // Creates a new task obj an adds to all tasks
    const addNewTask = function(e){
	if (task.task){
	    task.id = getTaskId();
	    setTasks([ ...tasks, task ]);
	    setTask({ task:"" });
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
	  <section className={ styles["tasks-section"] } >
	    <TaskList tasks={ tasks } setTasks={ setTasks }/>
	  </section>
	  <Footer tasks={ tasks } />
	</>);
}
