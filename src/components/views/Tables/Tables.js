import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Button variant="contained" color="secondary" size="small" className={styles.button} component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New booking</Button>
    <Button variant="contained" color="secondary" size="small" className={styles.button} component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>Booking info</Button>
    <Button variant="contained" color="secondary" size="small" className={styles.button} component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`}>New event</Button>
    <Button variant="contained" color="secondary" size="small" className={styles.button} component={Link} to={`${process.env.PUBLIC_URL}/tables/events/:id`}>Event info</Button>
  </div>
);

export default Tables;
