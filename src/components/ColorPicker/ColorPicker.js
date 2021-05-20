import styles from './ColorPicker.module.css'

const ColorPicker = (props) => (
  <div>
    {props.colors.map(color => 
      <button className={styles.button} style={{borderColor: color}} key={color} />  
    )}
  </div>
);

export default ColorPicker;
