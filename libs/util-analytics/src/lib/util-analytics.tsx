import styles from './util-analytics.module.css';
import { DemoCyclesUtilDates } from '@demo-cycles/util-dates';

export function DemoCyclesUtilAnalytics() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesUtilAnalytics!</h1>
      <DemoCyclesUtilDates />
    </div>
  );
}

export default DemoCyclesUtilAnalytics;
