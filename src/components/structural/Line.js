import styles from '../../styles/components/Line.module.css'

export default function Line(props: {width?: string|number, justifyContent?: string, onClick?: any}) {
    const width = props.width;
    const justifyContent = props.justifyContent;
    return (
        <div
            className={styles.line}
            style={{width:width,justifyContent:justifyContent||"space-around"}}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );
}
