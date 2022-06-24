import styles from '../../styles/components/Loading.module.css'
import Line from "../structural/Line";


export default function Loading() {
    return (
        <Line>
            <img
                src={require('../../images/icons8-whatsapp-100.png')}
            />
        </Line>
    );
}
