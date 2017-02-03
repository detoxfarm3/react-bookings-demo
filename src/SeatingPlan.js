import React from 'react';
import SeatingList from './SeatingList';

class SeatingPlan extends React.Component {
  // gives the component its state on initial render
  constructor (props) {
    super(props);

    this.state = {
      tables: JSON.parse(localStorage.getItem('bookings'))
    };
  }

  update = (id) => {
    if (id) {
      this.setState({
        tables: this.state.tables.map((el) => {
          // flip the seated state of the object if we have
          // an id match
          if (el.id === id) {
            el.seated = !el.seated;
          }

          return el;
        })
      });

      // NB: using localStorage as a sharted mutable state object
      // is rarely a good idea in production. works fine in out
      // limited use case, though
      localStorage.setItem('bookings', JSON.stringify(this.state.tables));
    }
  }

  render () {
    return (
      <div className="box">
        <header className="box__top">
          <h1 className="box__header">Seating</h1>
        </header>
        <SeatingList isSeated={false} callback={this.update} list={this.state.tables.filter(e => !e.seated)} />
        <SeatingList isSeated={true} callback={this.update} list={this.state.tables.filter(e => e.seated)} />
      </div>
    );
  }
}

export default SeatingPlan;
