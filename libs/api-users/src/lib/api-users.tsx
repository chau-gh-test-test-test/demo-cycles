import styles from './api-users.module.css';
import { DemoCyclesFeatureChat } from '@demo-cycles/feature-chat';

export function DemoCyclesApiUsers() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesApiUsers!</h1>
      <DemoCyclesFeatureChat />
    </div>
  );
}

export default DemoCyclesApiUsers;
