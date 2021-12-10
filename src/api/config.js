import axios from 'axios';
import base64 from 'react-native-base64';
import Globals from '../constants/Globals';

const baseURL = `https://api-${Globals.WorkspaceDetails.Region}.seatsio.net`;

const AxiosInstance = () => {
  console.log(baseURL);
  return axios.create({
    baseURL,
    headers: {
      Authorization: `Basic ${base64.encode(
        Globals.WorkspaceDetails.SecretId,
      )}`,
    },
  });
};

export {AxiosInstance};
