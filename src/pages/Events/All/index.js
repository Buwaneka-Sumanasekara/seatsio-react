import React from 'react';
import {useQuery} from 'react-query';
import {Table,Image} from 'react-bootstrap'
import { Button } from "@blueprintjs/core";
import { useNavigate } from "react-router-dom";
import WrapperDefault from '../../../components/wrappers/Default';


import {EventsApi} from '../../../api';

import './style.scss';

const getAllEvents = async () => {
  const res = await EventsApi.getAllEvents(10);
  return res.data;
};

const AllEventsPage = props => {
  let navigate = useNavigate();

   const {data, status} = useQuery('events', getAllEvents);
  const arItems = (data?.items?data.items:[]);

  return (
    <WrapperDefault title={"List of Events"}>
       <Table>
       <thead>
          <tr>
            <th>#</th>
            <th></th>
          </tr>
      </thead>
      <tbody>
        {arItems.map((value,index)=>(
          <tr>
             <td>{value.id}</td>
             <td><Button icon="edit" onClick={()=>navigate(`/event/${value.key}`)} /></td>
          </tr>
        ))}
        
      </tbody>
       </Table>
    </WrapperDefault> 
  );
};



export default AllEventsPage;
