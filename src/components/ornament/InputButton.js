import styles from '../../styles/components/InputButton.module.css'
import Line from "../structural/Line";


export default function InputButton(props: {onChange?: any, onClick?: any, iconUrl?: string, placeholder?: string}) {

    return (
        <Line
            width={"100%"}
        >
            <div className={styles.body}>
                <input
                    type={"button"}
                    className={styles.input}
                    value={props.placeholder}
                    onClick={props.onClick}
                />
            </div>
        </Line>
    );
}
