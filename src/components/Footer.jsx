// Defines the footer component
import '../App.css'
import styles from './footer.module.css'

export default function Footer({ tasks }){
    const completed = tasks.reduce((acc, task) => {
	return acc + (task.completed ? 1 : 0);
    }, 0);

    return (
	<footer>
	  <section id="summary-section"
	       className={ styles["summary-section" ] } >
	    <div className={ `container ${ styles["summary-info"] }` }>
	      <span className={ styles["completed"] }>
		Completed: { completed }
	      </span>
	      <span className={ styles.total }>
		Total: { tasks.length }
	      </span>
	    </div>
	  </section>
	  <div className={ styles.copy }> &copy;William Inyam | 2024 </div>
	</footer>
    );
}
