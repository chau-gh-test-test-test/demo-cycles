import styles from './feature-chat.module.css';
import { DemoCyclesApiUsers } from '@demo-cycles/api-users';

export function DemoCyclesFeatureChat() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesFeatureChat!</h1>
      <DemoCyclesApiUsers />
    </div>
  );
}

export default DemoCyclesFeatureChat;
