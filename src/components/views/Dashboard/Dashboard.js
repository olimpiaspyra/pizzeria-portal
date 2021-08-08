import React from 'react';
import styles from './Dashboard.module.scss';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const demoContent = [
  { tableId: '1', status: null, id: null, hour: '12:00' },
  { tableId: '2', status: 'booked', id: '333', hour: '12:00' },
  { tableId: '3', status: 'event', id: '444', hour: '12:00' },
  { tableId: '1', status: 'event', id: '222', hour: '12:30' },
  { tableId: '2', status: 'booked', id: '111', hour: '12:30' },
  { tableId: '3', status: 'booked', id: '555', hour: '12:30' },
  { tableId: '1', status: null, id: null, hour: '13:00' },
  { tableId: '2', status: 'booked', id: '431', hour: '13:00' },
  { tableId: '3', status: null, id: null, hour: '13:00' },
  { tableId: '1', status: null, id: null, hour: '13:30' },
  { tableId: '2', status: null, id: null, hour: '13:30' },
  { tableId: '3', status: 'event', id: '132', hour: '13:30' },
  { tableId: '1', status: 'booked', id: '124', hour: '14:00' },
  { tableId: '2', status: 'booked', id: '321', hour: '14:00' },
  { tableId: '3', status: 'event', id: '123', hour: '14:00' },
];

const demoOrders = {
  delivery: '15',
  locally: '25',
};

const Dashboard = () => {
  return (
    <Paper>
      <div className={styles.component}>
        <h2>Todays orders statistics:</h2>
        <p>Delivery orders: {demoOrders.delivery}</p>
        <p>Locally orders: {demoOrders.locally}</p>
      </div>
      <div className={styles.component}>
        <h2>Todays bookings and events:</h2>
        <List className={styles.table}>
          <h4>Booked tables:</h4>
          {demoContent.map(table => (
            table.status === 'booked' ? (
              <ListItem key={table.id}>
                <ListItemText primary={`${table.hour} Table ${table.tableId}`} />
              </ListItem>) : null
          ))}
        </List>
        <List className={styles.table}>
          <h4>Event-booked tables:</h4>
          {demoContent.map(table => (
            table.status === 'event' ? (
              <ListItem key={table.id}>
                <ListItemText primary={`${table.hour} Table ${table.tableId}`} />
              </ListItem>) : null
          ))}
        </List>
      </div>
    </Paper>
  );
};

export default Dashboard;
