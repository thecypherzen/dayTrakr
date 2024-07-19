// Defines a header component
import styles from './header.module.css'

export default function Header(){
    return (<>
	    <header className={ styles.header }>
	    <div className="container">
	    <h1> Day Trackr </h1>
	    <p> keep accurate track of your day-to-day. </p>
	    </div>
	    </header>
	    </>);
}
