import styles from './util-caching.module.css';
import { DemoCyclesFeatureSearch } from '@demo-cycles/feature-search';

export function DemoCyclesUtilCaching() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesUtilCaching!</h1>
      <DemoCyclesFeatureSearch />
    </div>
  );
}

export default DemoCyclesUtilCaching;
