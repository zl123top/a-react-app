import * as React from 'react';
import styles from './App.css';
import { CellMeasurer, CellMeasurerCache ,MultiGrid } from 'react-virtualized';


export default class App extends React.PureComponent {

  constructor(props) {
    super(props);

    this._cache = new CellMeasurerCache({
      defaultWidth: 150,
      defaultHeight: 30,
      minHeight: 30,
      fixedWidth: true,
    });

    this._cellRenderer = this._cellRenderer.bind(this);
  }

  render() {

    return (
      <MultiGrid
        className={styles.BodyGrid}
        columnCount={1000}
        columnWidth={this._getColumnWidth}
        deferredMeasurementCache={this._cache}
        height={400}
        overscanColumnCount={10}
        overscanRowCount={10}
        cellRenderer={this._cellRenderer}
        rowCount={1000}
        rowHeight={this._cache.rowHeight}
        width={1000}
      />
    );
  }

  _cellRenderer({columnIndex, key, parent, rowIndex, style}) {
    let content = '哈哈哈哈哈哈哈哈哈哈哈jkflkdjfsa';

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
            wordBreak: 'break-word',
            width:this._getColumnWidth({index:columnIndex}),
          }}>
          {content}
        </div>
      </CellMeasurer>
    );
  }
  _getColumnWidth = ({index}) => {
    return (index +1) * 50;
  };
}