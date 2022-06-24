import styles from '../../styles/components/NumberItem.module.css'
import Line from "../structural/Line";
import {useState} from "react";


export default function NumberItem(props: {onChange?: any, onClick?: any, placeholder?: string, number?: string}) {

    return (
        <Line
            width={"100%"}
        >
            <div className={styles.body}>
                <h1 className={styles.title}>{props.number}</h1>
                <div
                    className={styles.input}
                    onClick={props.onClick}
                >
                    <img
                        src={require("../../images/lixo-24.png")}
                    />
                </div>
            </div>
        </Line>
    );
}
