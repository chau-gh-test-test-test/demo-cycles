import styles from './feature-admin.module.css';
import { DemoCyclesUiLayout } from '@demo-cycles/ui-layout';

export function DemoCyclesFeatureAdmin() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesFeatureAdmin!</h1>
      <DemoCyclesUiLayout />
    </div>
  );
}

export default DemoCyclesFeatureAdmin;

