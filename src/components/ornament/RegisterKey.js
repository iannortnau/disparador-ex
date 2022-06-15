import styles from '../../styles/components/RegisterKey.module.css'
import Line from "../structural/Line";
import Column from "../structural/Column";
import InputIcon from "./InputIcon";
import Text from "./Text";
import InputButton from "./InputButton";


export default function RegisterKey() {
    return (
        <div className={styles.body}>
            <Column>
                <Text>
                    Coloque aqui sua Chave de Acesso.
                </Text>
                <InputIcon
                    placeholder={"EX:Chave"}
                />
                <InputButton
                    placeholder={"ENVIAR"}
                />
            </Column>
        </div>
    );
}
