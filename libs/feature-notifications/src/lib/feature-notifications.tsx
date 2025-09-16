import styles from './feature-notifications.module.css';
import { DemoCyclesUtilLogging } from '@demo-cycles/util-logging';

export function DemoCyclesFeatureNotifications() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesFeatureNotifications!</h1>
      <DemoCyclesUtilLogging />
    </div>
  );
}

export default DemoCyclesFeatureNotifications;
