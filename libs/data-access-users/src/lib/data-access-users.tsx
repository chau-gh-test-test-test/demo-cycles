import styles from './data-access-users.module.css';
import { DemoCyclesFeatureAuth } from '@demo-cycles/feature-auth';
import { DemoCyclesApiUsers } from '@demo-cycles/api-users';

export function DemoCyclesDataAccessUsers() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesDataAccessUsers!</h1>
      <DemoCyclesFeatureAuth />
      <DemoCyclesApiUsers />
    </div>
  );
}

export default DemoCyclesDataAccessUsers;
