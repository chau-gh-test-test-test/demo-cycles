import styles from './ui-input.module.css';
import { DemoCyclesUtilValidation } from '@demo-cycles/util-validation';

export function DemoCyclesUiInput() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesUiInput!</h1>
      <DemoCyclesUtilValidation />
    </div>
  );
}

export default DemoCyclesUiInput;
