import styles from './ScoreButton.module.css'

console.log(styles)

const ScoreButton = (props) => (
  <button className ={`${styles.button} btn btn-default`}>
    ✔︎
  </button>
);

export default ScoreButton;
