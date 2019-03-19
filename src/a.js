import * as React from 'react';
import styles from './App.css';
import { CellMeasurer, CellMeasurerCache, Grid } from 'react-virtualized';

export default class App extends React.PureComponent {

  constructor(props) {
    super(props);

    this._cache = new CellMeasurerCache({
      defaultWidth: 150,
      fixedWidth: true,
    });

    this._cellRenderer = this._cellRenderer.bind(this);
  }

  render() {

    return (
      <Grid
        className={styles.BodyGrid}
        columnCount={50}
        columnWidth={150}
        deferredMeasurementCache={this._cache}
        height={400}
        overscanColumnCount={0}
        overscanRowCount={2}
        cellRenderer={this._cellRenderer}
        rowCount={1000}
        rowHeight={this._cache.rowHeight}
        width={1000}
      />
    );
  }

  _cellRenderer({columnIndex, key, parent, rowIndex, style}) {
    const content = '哈哈哈哈看了看看看急急急';

    return (
      <CellMeasurer
        cache={this._cache}
        columnIndex={columnIndex}
        key={key}
        parent={parent}
        rowIndex={rowIndex}>
        <div
          style={{
            ...style,
            width: 150,
          }}>
          {content}
        </div>
      </CellMeasurer>
    );
  }
}