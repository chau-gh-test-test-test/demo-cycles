import styles from './feature-admin.module.css';
import { DemoCyclesUiLayout } from '@demo-cycles/ui-layout';
import { DemoCyclesApiUsers } from '@demo-cycles/api-users';

export function DemoCyclesFeatureAdmin() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesFeatureAdmin!</h1>
      <DemoCyclesUiLayout />
      <DemoCyclesApiUsers />
    </div>
  );
}

export default DemoCyclesFeatureAdmin;