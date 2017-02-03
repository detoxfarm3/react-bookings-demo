import React from 'react';

const Pikaday = require('pikaday');

class BookingForm extends React.Component {
  constructor () {
    super();
    this.state = {};
  }

  componentDidMount () {
    // attach date picker to the DOM after the component
    // has mounted
    this.picker = new Pikaday({
      field: document.getElementById('datepicker')
    });
  }

  onFormSubmit = (ev) => {
    ev.preventDefault();

    // populate data object using form values
    const data = {
      'id': Math.random().toString(36).substr(2, 5),
      'first_name': this.refs.firstName.value,
      'last_name': this.refs.lastName.value,
      'email': this.refs.email.value,
      'telephone': this.refs.tel.value,
      'dining_date': this.refs.datepicker.value,
      'covers': this.refs.numberOfPeople.value,
      'seated': false
    };

    // mark form as submitted
    this.setState({
      type: 'success', message: 'Booking made!'
    }, this.store(data));
  }

  store = (data) => {
    // get existing storage
    let storage = localStorage.getItem('bookings');

    // create new array if there's no data in localStorage
    storage = storage ? JSON.parse(storage) : [];

    storage.push(data);
    localStorage.setItem('bookings', JSON.stringify(storage));
  }

  render () {
    let classString;
    let status;

    if (this.state.type && this.state.message) {
      classString = `alert alert-${this.state.type}`;
      status = <div id="status" className={classString} ref="status">{this.state.message}</div>;
    }

    return (
      <div className="box">
        <header className="box__top">
          <h1 className="box__header">Book A Table</h1>
        </header>
        <main>
          <form action="" className="booking-form" onSubmit={this.onFormSubmit}>
            <label htmlFor="first-name">First Name</label>
            <input ref="firstName" id="first-name" type="text" required />
            <label htmlFor="last-name">Last Name</label>
            <input ref="lastName" id="last-name" type="text" required />
            <label htmlFor="datepicker">Dining Date</label>
            <input ref="datepicker" type="text" id="datepicker" required />
            <label htmlFor="number-of-people">How many people?</label>
            <input ref="numberOfPeople" type="number" min="0" max="10" id="number-of-people" required />
            <label htmlFor="tel">Telephone Number</label>
            <input ref="tel" id="tel" type="text" required />
            <label htmlFor="email">E-mail Address</label>
            <input ref="email" id="email" type="email" required />
            <input type="submit" />
          </form>
          {status}
        </main>
      </div>
    );
  }
}

export default BookingForm;
