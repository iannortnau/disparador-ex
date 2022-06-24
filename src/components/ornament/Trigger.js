import React, {PropTypes, useState, useContext, useEffect} from 'react'
import Column from "../structural/Column";
import {GlobalContext} from "../../context/GlobalContext";
import NumberLogger from "./NumberLogger";
import ListNumbers from "./ListNumbers";
import InputButton from "./InputButton";
import InputNumbers from "./InputNumbers";

export default function Trigger(props) {
    const {
        numbers
    } = useContext(GlobalContext);
    const [message, setMessage] = useState("");

    function send(){
       const resp = chrome.runtime.sendMessage({code: "send",numbers: numbers, message: message});
       console.log(resp);
    }

    return (
        <Column>
            <InputButton
                placeholder={"ENVIAR"}
                onClick={send}
            />
            <InputNumbers
                title={"Mensagem"}
                onChange={setMessage}
            />
            <NumberLogger/>
            <ListNumbers/>
        </Column>
    );
}
