import React, { Component } from 'react';

import * as _ from 'lodash';
import TableComponent from '../../component/table';
import PaginationComponent from '../../component/pagination';

import BusController from '../../api/BusController';

import schema from './schema';

class TablePaginationView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      pageIndex: 1,
      totalCount: 1000,
      limit: 10,
    };
  }

  componentWillMount() {
    BusController.selectList(1, 1000, 20170301).then((response) => {
      this.setState({
        items: response.data.CardBusStatisticsServiceNew.row,
        totalCount: response.data.CardBusStatisticsServiceNew.row.length,
      });
    });
  }

  setPagingItems(pageIndex) {
    const { totalCount, limit, items } = this.state;
    if (pageIndex < 1 || pageIndex > totalCount) {
      return [];
    }
    const offset = (pageIndex - 1) * limit;
    const pageLimit = pageIndex * limit;
    const paginedItems = _.slice(items, offset, pageLimit);
    return paginedItems;
  }

  handleChangePage = (num) => {
    this.setState({
      pageIndex: num,
    });
  };

  render() {
    const { pageIndex, totalCount } = this.state;
    return (
      <section>
        <div>
          <PaginationComponent
            pageIndex={pageIndex}
            totalCount={totalCount}
            onClick={this.handleChangePage}
          />
        </div>
        <div>
          <TableComponent items={this.setPagingItems(pageIndex)} schema={schema} />
        </div>
      </section>
    );
  }
}

export default TablePaginationView;
