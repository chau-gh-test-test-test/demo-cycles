import styles from './util-formatting.module.css';
import { DemoCyclesFeatureDashboard } from '@demo-cycles/feature-dashboard';

export function DemoCyclesUtilFormatting() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesUtilFormatting!</h1>
      <DemoCyclesFeatureDashboard />
    </div>
  );
}

export default DemoCyclesUtilFormatting;
