import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>Booking info</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New event</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}>Event info</Link>
  </div>
);

export default Tables;
