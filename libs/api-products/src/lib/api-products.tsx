import styles from './api-products.module.css';
import { DemoCyclesUtilAnalytics } from '@demo-cycles/util-analytics';

export function DemoCyclesApiProducts() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesApiProducts!</h1>
      <DemoCyclesUtilAnalytics />
    </div>
  );
}

export default DemoCyclesApiProducts;
