import React, {PropTypes, useState, useContext} from 'react'
import styles from '../../styles/components/Trigger.module.css'
import Column from "../structural/Column";
import Text from "./Text";
import {GlobalContext} from "../../context/GlobalContext";


export default function Trigger(props) {
    const {
        key,
        setKey,
        authenticated,
        setAuthenticated,
        validateKey,
        setLoad
    } = useContext(GlobalContext);
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("Disparador");


    return (
        <Column>
            <Text>
                {title}
            </Text>
        </Column>
    );
}
