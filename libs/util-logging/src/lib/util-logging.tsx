import styles from './util-logging.module.css';
import { DemoCyclesDataAccessUsers } from '@demo-cycles/data-access-users';

export function DemoCyclesUtilLogging() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesUtilLogging!</h1>
      <DemoCyclesDataAccessUsers />
    </div>
  );
}

export default DemoCyclesUtilLogging;
