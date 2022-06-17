import styles from '../../styles/components/Message.module.css'
import Line from "../structural/Line";


export default function Message(props) {
    return (
        <Line>
            <h1 className={styles.text}>{props.children}</h1>
        </Line>
    );
}
