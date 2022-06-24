import styles from '../../styles/components/Column.module.css'

export default function Column(props: {height?: number, justifyContent?: string}) {
    const justifyContent = props.justifyContent
    const height = props.height
    return (
        <div className={styles.column} style={{justifyContent:justifyContent||"center",height:height}}>
            {props.children}
        </div>
    )
}
