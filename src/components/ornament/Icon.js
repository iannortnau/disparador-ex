import styles from '../../styles/components/Icon.module.css'
import Line from "../structural/Line";


export default function Icon() {
    return (
        <Line>
            <img
                src={require("../../images/logo.png")}
                width={150}
            />
        </Line>
    );
}
