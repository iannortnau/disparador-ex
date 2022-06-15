import styles from '../../styles/components/InputIcon.module.css'
import Line from "../structural/Line";


export default function InputIcon(props: {onChange?: any, onClick?: any, iconUrl?: string, placeholder?: string}) {

    return (
        <Line
            width={"100%"}
        >
            <div className={styles.body}>
                <input
                    className={styles.input}
                    placeholder={props.placeholder}
                />
            </div>
        </Line>
    );
}
