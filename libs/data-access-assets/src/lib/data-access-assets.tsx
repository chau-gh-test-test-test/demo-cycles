import styles from './data-access-assets.module.css';
import { DemoCyclesFeatureProfile } from '@demo-cycles/feature-profile';

export function DemoCyclesDataAccessAssets() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesDataAccessAssets!</h1>
      <DemoCyclesFeatureProfile />
    </div>
  );
}

export default DemoCyclesDataAccessAssets;
