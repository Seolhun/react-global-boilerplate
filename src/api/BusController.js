import http, { END_POINT } from './http';

const BUS_API = 'http://openapi.seoul.go.kr:8088/686e75796968696438376a6947427a/json';

class BusController {
  static selectList(no = 1, row = 1000, date = 20170301) {
    return http({
      url: `${BUS_API}/CardBusStatisticsServiceNew/${no}/${row}/${date}`,
    });
  }

  static getTimeLagSummaryTable = async ({
    subdomain,
    from,
    to,
    unit = 1,
  }) => {
    if (!subdomain) {
      throw new Error('Not found requirement "subdomain" parameter.');
    }
    if (!from) {
      throw new Error('Not found requirement from" parameter.');
    }
    if (!to) {
      throw new Error('Not found requirement to" parameter.');
    }
    try {
      const response = await http({
        method: 'get',
        url: `api/v3/apps/${subdomain}/fraud-report/time-lag/summary?from=${from}&to=${to}&unit=${unit}`,
        endpoint: END_POINT.PROD,
      });
      return {
        result: response.data,
        hasError: false,
        error: {},
      };
    } catch (error) {
      return {
        result: {},
        hasError: true,
        error: error.message,
      };
    }
  };

  static getTimeLagGraph = async ({
    subdomain,
    from,
    to,
    unit = 1,
  }) => {
    if (!subdomain) {
      throw new Error('Not found requirement "subdomain" parameter.');
    }
    if (!from) {
      throw new Error('Not found requirement from" parameter.');
    }
    if (!to) {
      throw new Error('Not found requirement to" parameter.');
    }
    try {
      const response = await http({
        method: 'get',
        url: `api/v3/apps/${subdomain}/fraud-report/time-lag/graph?from=${from}&to=${to}&unit=${unit}`,
        endpoint: END_POINT.PROD,
      });
      return {
        result: response.data,
        hasError: false,
        error: {},
      };
    } catch (error) {
      return {
        result: [],
        hasError: true,
        error: error.message,
      };
    }
  };
}

export default BusController;
