import styles from './ui-modal.module.css';
import { DemoCyclesUtilRouting } from '@demo-cycles/util-routing';

export function DemoCyclesUiModal() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesUiModal!</h1>
      <DemoCyclesUtilRouting />
    </div>
  );
}

export default DemoCyclesUiModal;
