import React from 'react';
import SeatingListItem from './SeatingListItem';

class SeatingList extends React.Component {
  // gives the component its state on initial render
  componentWillMount () {
    this.setState({ list: this.props.list });
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ list: nextProps.list });
  }

  // passes a message to the parent component to toggle
  // seating state
  toggle = (id) => {
    this.props.callback(id);
  }

  render () {
    const text = this.props.isSeated ? 'Seated' : 'Not Seated';

    const item = (itemData) => {
      return <SeatingListItem key={itemData.id} id={itemData.id} data={itemData} callback={this.toggle} />;
    };

    return (
      <div className="seating">
        <h3 className="seating__title">{text}</h3>
        <ul className="seating__list">
          {this.state.list.map(item)}
        </ul>
      </div>
    );
  }
}

SeatingList.propTypes = {
  list: React.PropTypes.array,
  isSeated: React.PropTypes.bool,
  callback: React.PropTypes.func
};

export default SeatingList;
