import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import SeatingPlan from './SeatingPlan';
import BookingForm from './BookingForm';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={BookingForm} />
    <Route path="/seating" component={SeatingPlan} />
  </Router>,
  document.getElementById('root')
);
