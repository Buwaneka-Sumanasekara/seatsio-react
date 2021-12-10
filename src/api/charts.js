import {AxiosInstance} from './config';
import {generateQueryParameter} from '../utils';

function getAllEvents(pageSize) {
  return AxiosInstance().get(`/events${generateQueryParameter({pageSize})}`);
}

export default {getAllEvents};
