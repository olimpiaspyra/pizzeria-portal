import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import NewOrder from './components/views/NewOrder/NewOrder';
import OrderInfo from './components/views/OrderInfo/OrderInfo';
import BookingInfo from './components/views/BookingInfo/BookingInfo';
import NewBooking from './components/views/NewBooking/NewBooking';
import EventInfo from './components/views/EventInfo/EventInfo';
import NewEvent from './components/views/NewEvent/NewEvent';
import { StylesProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    // secondary: {
    //   main: '#11cb5f',
    // },
  },
});

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard}/>
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login}/>
              <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen}/>
              <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables}/>
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={NewBooking}/>
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={BookingInfo}/>
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={NewEvent}/>
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={EventInfo}/>
              <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter}/>
              <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={NewOrder}/>
              <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={OrderInfo}/>
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
