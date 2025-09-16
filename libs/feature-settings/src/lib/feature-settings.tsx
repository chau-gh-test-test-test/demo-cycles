import styles from './feature-settings.module.css';
import { DemoCyclesUiInput } from '@demo-cycles/ui-input';

export function DemoCyclesFeatureSettings() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesFeatureSettings!</h1>
      <DemoCyclesUiInput />
    </div>
  );
}

export default DemoCyclesFeatureSettings;
