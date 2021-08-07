import React from 'react';
import styles from './EventInfo.module.scss';
import { useParams } from 'react-router-dom';

const EventInfo = () => {

  const {id}= useParams();

  return (
    <div className={styles.component}>
      <h2>EventInfo view</h2>
      {id}
    </div>
  );
};

export default EventInfo;
