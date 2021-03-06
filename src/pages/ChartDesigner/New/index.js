import React, {useState, useRef, useEffect} from 'react';
import {useQuery} from 'react-query';
import { SeatsioDesigner } from '@seatsio/seatsio-react'
import Globals from "../../../constants/Globals";
import { useParams } from "react-router-dom";

const ChartDesignerNewPage = props => {
  const { navigation} = props;

  let Params = useParams();

console.log(Params)
  return (
    <SeatsioDesigner
      secretKey={Globals.WorkspaceDetails.SecretId}    
      region={Globals.WorkspaceDetails.Region}
      chartKey={(Params.id?Params.id:undefined)}
    />
  );
};



export default ChartDesignerNewPage;
