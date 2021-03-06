import React, {useState, useRef, useEffect} from 'react';
import {useQuery} from 'react-query';
import { Button } from "@blueprintjs/core";
import {Table,Image} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import WrapperDefault from '../../../components/wrappers/Default';


import {ChartsApi} from '../../../api';

import './style.scss';

const getCharts = async () => {
  const res = await ChartsApi.getAllCharts(10);
  return res.data;
};

const ChartListPage = props => {
  let navigate = useNavigate();

   const {data, status} = useQuery('charts', getCharts);
  const arItems = (data?.items?data.items:[]);


console.log(data);
  return (
    <WrapperDefault title={"List of Charts"}>
       <Table>
       <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Name</th>
            <th>Status</th>
            <th></th>
          </tr>
      </thead>
      <tbody>
        {arItems.map((value,index)=>(
          <tr>
            <td> <Image className='chart-thumbnail' src={value.publishedVersionThumbnailUrl} rounded fluid thumbnail /></td>
            <td>{value.id}</td>
            <td>{value.name}</td>
            <td>{value.status}</td>
            <td><Button icon="edit" onClick={()=>navigate(`/chart-designer/${value.key}`)} /></td>
          </tr>
        ))}
        
      </tbody>
       </Table>
    </WrapperDefault> 
  );
};



export default ChartListPage;
