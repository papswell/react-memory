import React from 'react';
import Cell from './cell';

import {
  getGrid,
  getRandom,
  shuffle,
  splitInLines,
} from './utils';

export default class Grid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: getGrid(props.size),
      selected: [],
    }
  }

  handleCellClick(cellIndex) {
    console.log('Click on cell', cellIndex);
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
