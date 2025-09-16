import styles from './ui-layout.module.css';
import { DemoCyclesFeatureNotifications } from '@demo-cycles/feature-notifications';

export function DemoCyclesUiLayout() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesUiLayout!</h1>
      <DemoCyclesFeatureNotifications />
    </div>
  );
}

export default DemoCyclesUiLayout;
