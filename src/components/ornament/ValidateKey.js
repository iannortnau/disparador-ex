import React, {PropTypes, useState, useContext} from 'react'
import styles from '../../styles/components/RegisterKey.module.css'
import Line from "../structural/Line";
import Column from "../structural/Column";
import InputIcon from "./InputIcon";
import Text from "./Text";
import InputButton from "./InputButton";
import Message from "./Message";
import {GlobalContext} from "../../context/GlobalContext";


export default function ValidateKey(props) {
    const {
        key,
        setKey,
        authenticated,
        setAuthenticated,
        validateKey,
        setLoad
    } = useContext(GlobalContext);
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("Coloque aqui sua Chave de Acesso");

    async function validate(){
        if(key.length>0){
            setTitle("Validando...");
            console.log("validando chave");
            const resp = await validateKey(key);
            if (resp.status) {
                window.localStorage.setItem('key', key);
                setLoad(false);
                setAuthenticated(true);
            }else{
                setTitle("Coloque aqui sua Chave de Acesso");
                setMessage(resp.data);
            }
        }else{
            setMessage("Coloque a Chave");
        }
    }

    return (
        <div className={styles.body}>
            <Column>
                <Text>
                    {title}
                </Text>
                <InputIcon
                    placeholder={"EX:Chave"}
                    onChange={setKey}
                />
                <InputButton
                    placeholder={"ENVIAR"}
                    onClick={validate}
                />
                <Message>
                    {message}
                </Message>
            </Column>
        </div>
    );
}
