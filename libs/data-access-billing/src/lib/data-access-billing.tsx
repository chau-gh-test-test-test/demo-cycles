import styles from './data-access-billing.module.css';
import { DemoCyclesFeatureBilling } from '@demo-cycles/feature-billing';

export function DemoCyclesDataAccessBilling() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesDataAccessBilling!</h1>
      <DemoCyclesFeatureBilling />
    </div>
  );
}

export default DemoCyclesDataAccessBilling;
