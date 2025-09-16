import styles from './ui-table.module.css';
import { DemoCyclesDataAccessOrders } from '@demo-cycles/data-access-orders';

export function DemoCyclesUiTable() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesUiTable!</h1>
      <DemoCyclesDataAccessOrders />
    </div>
  );
}

export default DemoCyclesUiTable;
