import React from 'react';
import RoomsFilter from "../components/RoomsFilter";
import RoomsList from "../components/RoomsList";

const RoomsContainer = () => {
    return (
        <div>
            Hello from  room container
            <RoomsFilter />
            <RoomsList />
        </div>
    );
}

export default RoomsContainer;
