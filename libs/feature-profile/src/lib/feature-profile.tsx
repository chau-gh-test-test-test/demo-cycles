import styles from './feature-profile.module.css';
import { DemoCyclesUiAvatar } from '@demo-cycles/ui-avatar';

export function DemoCyclesFeatureProfile() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesFeatureProfile!</h1>
      <DemoCyclesUiAvatar />
    </div>
  );
}

export default DemoCyclesFeatureProfile;
