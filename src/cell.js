import React from 'react';
import PropTypes from 'prop-types';

export default class Cell extends React.Component {

  static propTypes = {
    value: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  handleClick = () => {
    if (this.props.disabled) return;

    this.props.onClick(this.props.index);
  }

  render() {
    const { value, selected, disabled } = this.props;

    const className = ''
      .concat(selected ? ' selected' : '')
      .concat(disabled ? ' disabled' : '');

    return (
      <td onClick={this.handleClick} className={className}>
        <span className="value">
          { value }
        </span>
      </td>
    );
  }

}
