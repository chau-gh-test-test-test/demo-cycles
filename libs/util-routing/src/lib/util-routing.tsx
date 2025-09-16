import styles from './util-routing.module.css';
import { DemoCyclesUiModal } from '@demo-cycles/ui-modal';

export function DemoCyclesUtilRouting() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesUtilRouting!</h1>
      <DemoCyclesUiModal />
    </div>
  );
}

export default DemoCyclesUtilRouting;
