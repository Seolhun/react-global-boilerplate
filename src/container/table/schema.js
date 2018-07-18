/**
USE_DT 사용일자
BUS_ROUTE_ID 노선 ID
BUS_ROUTE_NO 노선번호
BUS_ROUTE_NM 노선명
SSNT_BSST_ID 표준 버스정류장 ID
BSST_ARS_NO 버스정류장 ARS 번호
BUS_STA_ID 역 ID
BUS_STA_NM 역명
RIDE_PASGR_NUM 총 승차 승객수
ALIGHT_PASGER_NUM 총 하차 승객 수
WORK_DT 등록일
*/

const schema = [
  {
    id: 1,
    name: '사용일자',
    key: 'USE_DT',
  },
  {
    id: 2,
    name: '노선 ID',
    key: 'BUS_ROUTE_ID',
  },
  {
    id: 3,
    name: '노선번호',
    key: 'BUS_ROUTE_NO',
  },
  {
    id: 4,
    name: '노선명',
    key: 'BUS_ROUTE_NM',
  },
  {
    id: 5,
    name: '표준 버스정류장 ID',
    key: 'STND_BSST_ID',
  },
  {
    id: 6,
    name: '버스정류장 ARS 번호',
    key: 'BSST_ARS_NO',
  },
  {
    id: 7,
    name: '역 ID',
    key: 'BUS_STA_ID',
  },
  {
    id: 8,
    name: '역명',
    key: 'BUS_STA_NM',
  },
  {
    id: 9,
    name: '총 승차 승객수',
    key: 'RIDE_PASGR_NUM',
  },
  {
    id: 10,
    name: '총 하차 승객 수',
    key: 'ALIGHT_PASGER_NUM',
  },
  {
    id: 11,
    name: '등록일',
    key: 'WORK_DT',
  },
];

export default schema;
