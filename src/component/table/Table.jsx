import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Table.scss';

class Table extends Component {
  renderHeader() {
    const { schema } = this.props;
    return schema.map(schem => (
      <th key={schem.id}>
        {schem.name}
      </th>
    ));
  }

  renderBody() {
    const { items, schema } = this.props;
    return items.map((item, idx) => (
      <tr key={`${`table-${idx}`}`}>
        {
          schema.map(schem => (
            <td key={schem.id}>
              {item[schem.key]}
            </td>
          ))
        }
      </tr>
    ));
  }

  render() {
    const { showScroll, className } = this.props;
    return (
      <section>
        <div className={classnames(showScroll ? 'scroll-table' : 'paging-table', className)}>
          <table className="table table-hover">
            <thead>
              <tr>
                {
                  this.renderHeader()
                }
              </tr>
            </thead>
            <tbody>
              {
                this.renderBody()
              }
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

Table.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  schema: PropTypes.arrayOf(PropTypes.object).isRequired,

  showScroll: PropTypes.bool,
  className: PropTypes.string,
};

Table.defaultProps = {
  showScroll: false,
  className: '',
};

export default Table;
