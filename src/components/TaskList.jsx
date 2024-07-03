// Defines a Task Item component
import '../App.css'
import styles from './taskList.module.css'
import TaskItem from './TaskItem'

export default function TaskList({ tasks }){
    let length = tasks.length;

    return (
	length ?
	    <div className="container">
	      <div id="task-list" className={ styles["task-list"] }>
	    { tasks.map( (task) => {
		return (
		    <TaskItem key={ task.id} task={ task }
			      idx={ tasks.indexOf(task) }
			      length={ length }/>
		);
	    }) }
	      </div>
	    </div> :
	    < div className="hidden"> </div>);
}
