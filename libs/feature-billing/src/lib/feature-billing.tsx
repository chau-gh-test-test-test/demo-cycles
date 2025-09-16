import styles from './feature-billing.module.css';
import { DemoCyclesDataAccessBilling } from '@demo-cycles/data-access-billing';

export function DemoCyclesFeatureBilling() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesFeatureBilling!</h1>
      <DemoCyclesDataAccessBilling />
    </div>
  );
}

export default DemoCyclesFeatureBilling;
