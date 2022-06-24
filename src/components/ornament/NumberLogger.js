import styles from '../../styles/components/NumberLogger.module.css'
import {useState,useContext} from "react";
import Column from "../structural/Column";
import InputNumbers from "./InputNumbers";
import InputButton from "./InputButton";
import Text from "./Text";
import * as whats from "../../source/whatsAppApi";
import {GlobalContext} from "../../context/GlobalContext";


export default function NumberLogger() {
    const {
        numbers,
        addLocalNumbers
    } = useContext(GlobalContext);
    const [Country, setCountry] = useState("");
    const [DDD, setDDD] = useState("");
    const [number, setNumber] = useState("");
    const [list, setList] = useState("");

    function validateInputs(){
        return Country.length > 0 || DDD.length > 0 || number.length > 0 || list.length > 0;
    }

    function addNumber(){
        if(validateInputs()){
            addLocalNumbers(Country+DDD+number);
        }
    }

    function listNumber(){
        if(validateInputs()){
            console.log(list);
            const auxList = list.split(" ");
            for (let i = 0; i < auxList.length; i++) {
                addLocalNumbers(auxList[i]);
            }
        }
    }

    return (
        <Column
            width={"100%"}
        >
            <Text>
                Registrar Número
            </Text>
            <div className={styles.body}>
                <InputNumbers
                    title={"País"}
                    onChange={setCountry}
                    placeholder={"Ex:55"}
                />
                <InputNumbers
                    title={"DDD"}
                    onChange={setDDD}
                    placeholder={"Ex:51"}
                />
                <InputNumbers
                    title={"Telefone"}
                    onChange={setNumber}
                    placeholder={"Ex:999999999"}
                />
                <InputButton
                    placeholder={"ADICIONAR NÚMERO"}
                    onClick={addNumber}
                />
                <Text>
                    Ou
                </Text>
                <InputNumbers
                    title={"Lista"}
                    onChange={setList}
                    placeholder={""}
                />
                <InputButton
                    placeholder={"ADICIONAR LISTA"}
                    onClick={listNumber}
                />
            </div>
        </Column>
    );
}
