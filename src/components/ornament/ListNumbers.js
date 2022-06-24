import styles from '../../styles/components/ListNumbers.module.css'
import {useState,useContext} from "react";
import Column from "../structural/Column";
import InputNumbers from "./InputNumbers";
import InputButton from "./InputButton";
import Text from "./Text";
import {GlobalContext} from "../../context/GlobalContext";
import NumberItem from "./NumberItem";


export default function ListNumbers() {
    const {
        numbers,
        addLocalNumbers,
        deleteLocalNumbers
    } = useContext(GlobalContext);
    const [value, setValue] = useState("");
    const [Country, setCountry] = useState("");
    const [DDD, setDDD] = useState("");
    const [number, setNumber] = useState("");


   function deleteNumber(number){
        deleteLocalNumbers(number);
    }
    return (
        <Column
            width={"100%"}
        >
            <div
                className={styles.body}
            >
                <div className={styles.scroll}>
                    {numbers.map(function (number, index) {
                        return (
                            <NumberItem
                                number={number}
                                onClick={function () {
                                    deleteNumber(number);
                                }}
                            />
                        )
                    })}
                </div>
            </div>
        </Column>
    );
}
