import React from 'react';
import styles from './Kitchen.module.scss';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const demoOrders = [
  {id: 1,
    order: 'Salad',
    options: ['Tuna', 'Tomato sauce'],
    tableId: '3',
    drinks: ['Water', 'Orange Juice'],
    time: '11:00',
    status: 'new' },
  {id: 2,
    order: 'Pizza',
    options: ['Thick crust', 'Basil'],
    tableId: '3',
    drinks: [],
    time: '12:40',
    status: 'in progress' },
  {id: 3,
    order: 'Pizza',
    options: ['Thick crust'],
    tableId: '2',
    drinks: ['cola', 'orange'],
    time: '15:00',
    status: 'new' },
];

const renderActions = status => {
  switch (status) {
    case 'in progress':
      return (
        <FormControlLabel control={<Checkbox checked={true}/>} label="in progress" />
      );
    case 'new':
      return (
        <FormControlLabel control={<Checkbox checked={false}/>} label="new" />
      );
    default:
      return null;
  }
};

const Kitchen = () => (
  <div className={styles.component}>
    {demoOrders.map(orders => (
      <Card key={orders.id}>
        <CardContent>
          <Typography variant="h6">
            Order: {orders.order}
          </Typography>
          <Typography variant="subtitle1">
            Options: {orders.options.map(option => (
              `${option}, `
            ))}
          </Typography>
          <Typography variant="subtitle1">
            Drinks: {orders.drinks.map(drinks => (
              `${drinks}, `
            ))}
          </Typography>
          <Typography variant="subtitle1">
            Table: {orders.tableId}
          </Typography>
          <Typography variant="subtitle1">
            Time: {orders.time}
          </Typography>
          <Typography variant="subtitle2">
            Status: {renderActions(orders.status)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary" size="small">Order done</Button>
        </CardActions>
      </Card>
    ))}
  </div>
);

export default Kitchen;
