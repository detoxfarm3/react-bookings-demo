import React from 'react';

class SeatingListItem extends React.Component {
  componentWillMount () {
    this.setState(this.props.data);
  }

  componentWillReceiveProps (nextProps) {
    this.setState(nextProps.data);
  }

  // passes the index of the component to the seating list to
  // update the state of the list
  changeToSeated () {
    this.props.callback(this.props.id);
  }

  render () {
    return (
      <li className="seating-item">
        <div className="seating-item__container">
          <h3 className="seating-item__name">{this.state.first_name} {this.state.last_name}</h3>
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <span className="seating-item__detail">{this.state.email}</span>
          <i className="fa fa-phone-square" aria-hidden="true"></i>
          <span className="seating-item__detail">{this.state.telephone}</span>
        </div>

        <div className="seating-item__container">
          <span className="seating-item__detail">Dining on: {this.state.dining_date}</span>
          <span className="seating-item__detail">Number of covers: {this.state.covers}</span>
          <button onClick={this.changeToSeated.bind(this)} disabled={this.state.seated}>Seated</button>
        </div>
      </li>
    );
  }
}

SeatingListItem.propTypes = {
  data: React.PropTypes.object,
  callback: React.PropTypes.func,
  id: React.PropTypes.string
};

export default SeatingListItem;
