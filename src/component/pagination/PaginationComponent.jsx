import React, { Component } from 'react';

import { range as Rnage, isNumber } from 'lodash';

import PropTypes from 'prop-types';

import './PaginationComponent.css';

class PaginationComponent extends Component {
  pagination(pageIndex, totalCount, range) {
    const { limit } = this.props;
    const current = pageIndex;
    const totalPage = Math.ceil(totalCount / limit);
    const criteriaNumber = Math.floor(range / 2);

    const rangePage = Rnage(1, totalPage + 1);
    const rangePageWithDots = [];

    const left = current - criteriaNumber < 1 ? 1 : current - criteriaNumber;
    const right = current + criteriaNumber > totalPage ? totalPage : current + criteriaNumber;

    let condition = null;
    rangePage.forEach((i) => {
      if ((i >= left && i <= right) || ((i === 1)) || ((i === totalPage))) {
        if (i - condition !== 1) {
          rangePageWithDots.push('....');
        }
        rangePageWithDots.push(i);
        condition = i;
      }
    });
    return rangePageWithDots;
  }

  renderPageBtn() {
    const {
      pageIndex, totalCount, range, onClick,
    } = this.props;
    const pages = this.pagination(pageIndex, totalCount, range);
    return pages.map(pageNum => (
      <button
        key={pageNum}
        type="button"
        className={`btn ${pageIndex === pageNum ? 'btn-success' : 'btn-primary'} margin-5`}
        onClick={isNumber(pageNum) ? () => onClick(pageNum) : () => {}}
      >
        {pageNum}
      </button>
    ));
  }

  render() {
    return (
      <section>
        <div>
          {
            this.renderPageBtn()
          }
        </div>
      </section>
    );
  }
}

PaginationComponent.propTypes = {
  pageIndex: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,

  limit: PropTypes.number,
  range: PropTypes.number,
};

PaginationComponent.defaultProps = {
  limit: 10,
  range: 5,
};

export default PaginationComponent;
