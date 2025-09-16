import styles from './feature-auth.module.css';
import { DemoCyclesDataAccessUsers } from '@demo-cycles/data-access-users';

export function DemoCyclesFeatureAuth() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesFeatureAuth!</h1>
      <DemoCyclesDataAccessUsers />
    </div>
  );
}

export default DemoCyclesFeatureAuth;
