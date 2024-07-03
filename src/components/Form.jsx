// Defines task form component

import '../App.css'
import styles from './form.module.css'

export default function Form({ task, addNewTask, setTask }){

    return (
	<form className="container"
	      onSubmit={(e) => addNewTask(e)}>
	  <div className={ styles["form-group"] }>
            <input onChange={(e) => setTask(e.target.value)}
	      type="text" id="todo-input"
	      placeholder="Enter task here..."
	      value={task}/>
              <button id="add-task-btn" className="btn">
		Add Task
              </button>
	  </div>
	</form>
    );
    return (<div></div>);
}
