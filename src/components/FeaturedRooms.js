import React, { Component } from 'react';
import { RoomContext } from '../context';
import Title from './Title';

export class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
    const {loading, featuredRooms: rooms} = this.context;
    console.log(rooms);
        return (
            <div>
               from  featured rooms
            </div>
        );
    }
}

export default FeaturedRooms;
