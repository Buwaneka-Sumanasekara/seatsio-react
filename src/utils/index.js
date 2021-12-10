
import { v4 as uuidv4 } from 'uuid';

function generateQueryParameter(data_obj, allowEmptyStrings = false) {
  let str = '';
  for (const key in data_obj) {
    if (data_obj.hasOwnProperty(key)) {
      let value = data_obj[key];
      if (value !== null) {
        if (Array.isArray(value)) {
          if (value.length > 0) {
            if (str !== '') {
              str += '&';
            }
            str += `${key}=${value.join(',')}`;
          }
        } else if (value !== undefined && value !== '') {
          if (str !== '') {
            str += '&';
          }
          str += `${key}=${value}`;
        } else if (value !== undefined && allowEmptyStrings) {
          if (str !== '') {
            str += '&';
          }
          str += `${key}=${value}`;
        }
      }
    }
  }
  if (str !== '') {
    str = `?${str}`;
  }
  return str;
}


function generateUniqueOrderId(){
return uuidv4();
}

export {generateQueryParameter,generateUniqueOrderId};
