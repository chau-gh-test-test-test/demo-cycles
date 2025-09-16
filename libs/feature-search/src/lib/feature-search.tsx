import styles from './feature-search.module.css';
import { DemoCyclesUtilCaching } from '@demo-cycles/util-caching';

export function DemoCyclesFeatureSearch() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesFeatureSearch!</h1>
      <DemoCyclesUtilCaching />
    </div>
  );
}

export default DemoCyclesFeatureSearch;
