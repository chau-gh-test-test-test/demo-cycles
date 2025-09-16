import styles from './util-validation.module.css';
import { DemoCyclesFeatureSettings } from '@demo-cycles/feature-settings';

export function DemoCyclesUtilValidation() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesUtilValidation!</h1>
      <DemoCyclesFeatureSettings />
    </div>
  );
}

export default DemoCyclesUtilValidation;
