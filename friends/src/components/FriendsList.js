import React, { Component } from 'react';
import { Table } from 'reactstrap';

import Friend from './Friend';

const FriendsList = props => {
  return (
    <Table>
       <thead>
         <tr>
           <th>Id</th>
           <th>Name</th>
           <th>Age</th>
           <th>Email</th>
           <th></th>
           <th></th>
         </tr>
       </thead>
       <tbody>
         {props.friends.map((friend, index) => <Friend deleteFromFriendsList={props.deleteFromFriendsList} key={index} friend={friend} />)}
      </tbody>
    </Table>
  ); 
}

export default FriendsList;
