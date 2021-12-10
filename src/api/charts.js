import {AxiosInstance} from './config';
import {generateQueryParameter} from '../utils';

function getAllCharts(pageSize) {
  return AxiosInstance().get(`/charts${generateQueryParameter({pageSize})}`);
}

export default {getAllCharts};
