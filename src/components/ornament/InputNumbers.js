import styles from '../../styles/components/InputNumbers.module.css'
import Line from "../structural/Line";
import {useState} from "react";


export default function InputNumbers(props: {onChange?: any, onClick?: any, placeholder?: string, title?: string}) {
    const [value, setValue] = useState("");

    return (
        <Line
            width={"100%"}
        >
            <div className={styles.body}>
                <h1 className={styles.title}>{props.title}:</h1>
                <input
                    value={value}
                    className={styles.input}
                    placeholder={props.placeholder}
                    onChange={function(aux) {
                        setValue(aux.target.value);
                        props.onChange(aux.target.value);
                    }}
                />
            </div>
        </Line>
    );
}
