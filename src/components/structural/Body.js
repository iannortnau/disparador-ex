import styles from '../../styles/components/Body.module.css'

export default function Body(props) {
  return (
      <div className={styles.body}>
          {props.children}
      </div>
  );
}
