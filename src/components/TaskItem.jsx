// Defines a task item
import '../App.css'
import styles from './taskItem.module.css'

export default function TaskItem({ task, idx, length, tasks, setTasks }){

    const deleteTask = function(id){
	setTasks(tasks.filter((task) => task.id !== id));
    }

    const completeTask = function(e){
	const newTasks = tasks.map((currTask) => {
	    if (currTask.id === task.id) {
		currTask.completed = !(currTask.completed);
	    }
	    return currTask;
	});
	setTasks(newTasks);
    }
    return (
	<div id="task-item" key={ task.id }
	     className={ styles["item-container"] }>
	  <div className={ styles["task-item"] }
	       onClick={ (e) => completeTask(e) }>
	    <span className={ `${ styles["task-name"] }
		${task.completed ? styles.completed : ""}`} >
	      { task.task }
	    </span>
    	    <span onClick={ () => deleteTask(task.id) }
	      className={ styles["task-delete"] }> x </span>
	  </div>

	  <hr className={ idx === length - 1 ?
	      styles.hidden : styles.line } />
	</div>
    );
}
