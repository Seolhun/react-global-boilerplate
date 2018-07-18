import AbstractController from './AbstractController';

class CustomStatController extends AbstractController {
  // static async selectOne() {
  //   const { data } = await this.http('get', 'front/agency');
  //   return data;
  // }

  static async selectList(subdomain, {
    from,
    to,
    tableType,

    dataLabels,
    filters,
    groupLabels,

    sortBy,
    page = 1,
    count = 15,
    query,
    orderBy,
  }) {
    if (!subdomain) {
      throw new Error(`Not found subdomain: ${subdomain}`);
    }
    if (!from || !to) {
      throw new Error('Not found requirement "from" and "to"');
    }
    if (!tableType) {
      throw new Error('Not found requirement "tableType"');
    }
    try {
      const response = await this.http({
        method: 'get',
        url: `api/v2/apps/${subdomain}/stats/custom`,
        data: {
          dataLabels,
          filters,
          groupLabels,
          sortBy,
          page,
          count,
          query,
          orderBy,
          tableType,
          from,
          to,
        },
      });
      if (response.status === 200) {
        return response.data;
      }
      return {};
    } catch (error) {
      return new Error(error.message);
    }
  }
}

export default CustomStatController;
