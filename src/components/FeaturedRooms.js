import React, { Component } from 'react';
import { RoomContext } from '../context';
import Title from './Title';
import Rooms from '../components/Rooms'; 
import Loading from '../components/Loading';

export class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
    const {loading, featuredRooms: rooms} = this.context;
 rooms = rooms
        return (
          <div>
            from featured rooms
             <Loading />
            <Rooms />
          </div>
        );
    }
}

export default FeaturedRooms;
