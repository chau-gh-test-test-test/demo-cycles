import styles from './ui-theme.module.css';
import { DemoCyclesFeatureAdmin } from '@demo-cycles/feature-admin';

export function DemoCyclesUiTheme() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesUiTheme!</h1>
      <DemoCyclesFeatureAdmin />
    </div>
  );
}

export default DemoCyclesUiTheme;
