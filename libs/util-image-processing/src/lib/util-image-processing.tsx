import styles from './util-image-processing.module.css';
import { DemoCyclesDataAccessAssets } from '@demo-cycles/data-access-assets';

export function DemoCyclesUtilImageProcessing() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DemoCyclesUtilImageProcessing!</h1>
      <DemoCyclesDataAccessAssets />
    </div>
  );
}

export default DemoCyclesUtilImageProcessing;
