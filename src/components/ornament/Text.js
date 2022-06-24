import styles from '../../styles/components/Text.module.css'
import Line from "../structural/Line";


export default function Text(props) {
    return (
        <Line>
            <h1 className={styles.text}>{props.children}</h1>
        </Line>
    );
}
