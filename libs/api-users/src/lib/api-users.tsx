import styles from './api-users.module.css';
import { DemoCyclesFeatureChat } from '@demo-cycles/feature-chat';
import { DemoCyclesUiTheme } from '@demo-cycles/ui-theme';

export function DemoCyclesApiUsers() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesApiUsers!</h1>
      <DemoCyclesFeatureChat />
      <DemoCyclesUiTheme />
    </div>
  );
}

export default DemoCyclesApiUsers;
