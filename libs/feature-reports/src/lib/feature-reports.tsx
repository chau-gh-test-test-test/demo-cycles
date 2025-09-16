import styles from './feature-reports.module.css';
import { DemoCyclesUiCard } from '@demo-cycles/ui-card';

export function DemoCyclesFeatureReports() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesFeatureReports!</h1>
      <DemoCyclesUiCard />
    </div>
  );
}

export default DemoCyclesFeatureReports;
