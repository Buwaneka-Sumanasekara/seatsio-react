import React, {useState, useRef, useEffect} from 'react';
import {useQuery} from 'react-query';
import { SeatsioDesigner } from '@seatsio/seatsio-react'
import Globals from "../../constants/Globals";

const ChartDesignerNewPage = props => {
  const { navigation} = props;




  return (
    <SeatsioDesigner
    secretKey={Globals.WorkspaceDetails.SecretId}    
    region={Globals.WorkspaceDetails.Region}
/>
  );
};



export default ChartDesignerNewPage;
