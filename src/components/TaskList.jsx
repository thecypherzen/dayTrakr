// Defines a Task Item component
import '../App.css'
import styles from './taskList.module.css'
import TaskItem from './TaskItem'

export default function TaskList({ tasks, setTasks }){
    // use sorted tasks list to display tasks
    let length = tasks.length;
    const sortedTasks = tasks.slice()
	  .sort((a, b) => Number(a.completed - b.completed));

    return (
	length ?
	    <div className="container">
	      <div id="task-list" className={ styles["task-list"] }>
	    { sortedTasks.map( (task) => {
		return (
		    <TaskItem key={ task.id} task={ task }
			      idx={ sortedTasks.indexOf(task) }
			      length={ length }
			      tasks={ tasks }
			      setTasks={ setTasks }/>
		);
	    }) }
	      </div>
	    </div> :
	    < div className="hidden"> </div>);
}
