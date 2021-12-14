import React from 'react';
import { SeatsioEventManager } from '@seatsio/seatsio-react'
import Globals from "../../../constants/Globals";
import { useParams } from "react-router-dom";

const EventPage = props => {


  let Params = useParams();

  return (
    <SeatsioEventManager
      secretKey={Globals.WorkspaceDetails.SecretId}    
      region={Globals.WorkspaceDetails.Region}
      event={(Params.id?Params.id:undefined)}
      mode={"manageObjectStatuses"}
    />
  );
};



export default EventPage;
