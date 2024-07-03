// Defines a task item
import '../App.css'
import styles from './taskItem.module.css'

export default function TaskItem({ task, idx, length }){
    return (
	<div id="task-item" key={ task.id }
	     className={ styles["item-container"] }>

	  <div className={ styles["task-item"] }>
	    <span className={ styles["task-name"] }>
	      { task.task }
	    </span>
    	    <span className={ styles["task-delete"] }> x </span>
	  </div>

	  <hr className={ idx === length - 1 ?
	      styles.hidden : styles.line } />
	</div>
    );
}
