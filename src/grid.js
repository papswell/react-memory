import React from 'react';
import Cell from './cell';

import {
  getGrid,
  splitInLines,
} from './utils';

export default class Grid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: getGrid(props.size),
      selected: [],
      disabled: [],
    }
  }

  clearSelection() {
    this.setState({
      selected: [],
    });
  }

  handleCellClick = (cellIndex) => {

    const { selected, grid, disabled } = this.state;

    let newDisabled = disabled;
    let newSelection = selected;

    if (newSelection.length === 0) {
      // If nothing is selected, there is nothing to check.
      // Just store the new selected value
      newSelection = newSelection.concat([cellIndex]);

    } else if (newSelection.length === 1) {
      // Same cell clicked, ignore...
      if (cellIndex === this.state.selected[0]) return;

      // Update cell selection
      newSelection = newSelection.concat([cellIndex]);

      // Comapre selected values
      const value1 = grid[newSelection[0]];
      const value2 = grid[newSelection[1]];
      if (value1 === value2) {
        // If values match, move the cell in the disabled array
        newDisabled = disabled.concat(newSelection);
        newSelection = [];
      } else {
        // if values don't match, clear the selection after one second
        // to allow the user to memorize
        this.timer = setTimeout(this.clearSelection.bind(this), 1000);
      }
    } else {
      // Clear the cell selection
      newSelection = [];
      // Clear the timer, so the state is not updated unnecessary
      clearTimeout(this.timer);
    }

    this.setState({
      selected: newSelection,
      disabled: newDisabled,
    });
  }

  render() {

    const { size } = this.props;
    const { grid, selected, disabled } = this.state;

    const rowSize = Math.sqrt(size);

    let index = -1;

    return (
      <table>
        <tbody>
          {this.state.grid
            .reduce(splitInLines(rowSize), [])
            .map((line, i) => (
              <tr key={`row-${i}`}>
                {line.map((v, ii) => {
                  index++;
                  return (
                    <Cell
                      key={index}
                      index={index}
                      value={v}
                      onClick={this.handleCellClick}
                      selected={selected.indexOf(index) >= 0}
                      disabled={disabled.indexOf(index) >= 0}
                    />
                  )
                })}
              </tr>
            ))}
        </tbody>
      </table>
    );
  }

}
