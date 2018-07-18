import axios from 'axios';

axios.defaults.baseURL = ' http://openapi.seoul.go.kr:8088/686e75796968696438376a6947427a/json';

class BusController {
  static selectList(no = 1, row = 1000, date = 20170301) {
    return axios.get(`/CardBusStatisticsServiceNew/${no}/${row}/${date}`);
  }
}

export default BusController;
