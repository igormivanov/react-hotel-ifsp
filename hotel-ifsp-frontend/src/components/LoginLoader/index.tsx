// import { LoaderSpinner, LoginLoaderContainer } from "./styles";
import styles from './LoginLoader.module.css'

export function LoginLoader(){
  return (
    <div className={`${styles.spinner} ${styles.center}`}>
      <div className={styles['spinner-blade']}></div>
      <div className={styles['spinner-blade']}></div>
      <div className={styles['spinner-blade']}></div>
      <div className={styles['spinner-blade']}></div>
      <div className={styles['spinner-blade']}></div>
      <div className={styles['spinner-blade']}></div>
      <div className={styles['spinner-blade']}></div>
      <div className={styles['spinner-blade']}></div>
      <div className={styles['spinner-blade']}></div>
      <div className={styles['spinner-blade']}></div>
      <div className={styles['spinner-blade']}></div>
      <div className={styles['spinner-blade']}></div>
    </div>
  )
}