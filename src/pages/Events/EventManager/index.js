import React, {useState, useRef, useEffect} from 'react';
import {useQuery} from 'react-query';
import { SeatsioDesigner } from '@seatsio/seatsio-react'
import Globals from "../../../constants/Globals";
import { useParams } from "react-router-dom";

const EventPage = props => {


  let Params = useParams();

  return (
    <SeatsioDesigner
      secretKey={Globals.WorkspaceDetails.SecretId}    
      region={Globals.WorkspaceDetails.Region}
      chartKey={(Params.id?Params.id:undefined)}
    />
  );
};



export default EventPage;
