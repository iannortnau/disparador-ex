import styles from '../../styles/components/InputIcon.module.css'
import Line from "../structural/Line";
import {useState} from "react";


export default function InputIcon(props: {onChange?: any, onClick?: any, iconUrl?: string, placeholder?: string}) {
    const [value, setValue] = useState("");

    return (
        <Line
            width={"100%"}
        >
            <div className={styles.body}>
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
