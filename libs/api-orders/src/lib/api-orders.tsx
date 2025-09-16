import styles from './api-orders.module.css';
import { DemoCyclesUtilFormatting } from '@demo-cycles/util-formatting';

export function DemoCyclesApiOrders() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesApiOrders!</h1>
      <DemoCyclesUtilFormatting />
    </div>
  );
}

export default DemoCyclesApiOrders;
