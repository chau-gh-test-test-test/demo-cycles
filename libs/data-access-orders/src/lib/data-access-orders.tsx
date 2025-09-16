import styles from './data-access-orders.module.css';
import { DemoCyclesApiOrders } from '@demo-cycles/api-orders';

export function DemoCyclesDataAccessOrders() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesDataAccessOrders!</h1>
      <DemoCyclesApiOrders />
    </div>
  );
}

export default DemoCyclesDataAccessOrders;
