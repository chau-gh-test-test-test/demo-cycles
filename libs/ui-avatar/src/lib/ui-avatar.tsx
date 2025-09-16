import styles from './ui-avatar.module.css';
import { DemoCyclesUtilImageProcessing } from '@demo-cycles/util-image-processing';

export function DemoCyclesUiAvatar() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesUiAvatar!</h1>
      <DemoCyclesUtilImageProcessing />
    </div>
  );
}

export default DemoCyclesUiAvatar;
