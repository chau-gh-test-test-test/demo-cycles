import styles from './feature-dashboard.module.css';
import { DemoCyclesUiTable } from '@demo-cycles/ui-table';

export function DemoCyclesFeatureDashboard() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesFeatureDashboard!</h1>
      <DemoCyclesUiTable />
    </div>
  );
}

export default DemoCyclesFeatureDashboard;
