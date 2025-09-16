import styles from './data-access-products.module.css';
import { DemoCyclesApiProducts } from '@demo-cycles/api-products';

export function DemoCyclesDataAccessProducts() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesDataAccessProducts!</h1>
      <DemoCyclesApiProducts />
    </div>
  );
}

export default DemoCyclesDataAccessProducts;
