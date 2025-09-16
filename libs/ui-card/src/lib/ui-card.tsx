import styles from './ui-card.module.css';
import { DemoCyclesDataAccessProducts } from '@demo-cycles/data-access-products';

export function DemoCyclesUiCard() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesUiCard!</h1>
      <DemoCyclesDataAccessProducts />
    </div>
  );
}

export default DemoCyclesUiCard;
