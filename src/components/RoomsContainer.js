import React from 'react';
import RoomsFilter from "../components/RoomsFilter";
import RoomsList from "../components/RoomsList";
import {RoomConsumer} from "../context";
import Loading from "../components/Loading";

const RoomsContainer = () => {

    return (

    <RoomConsumer>
        {
            (value)=>{
                console.log(value);

                return (
                  <div>
                    Hello from room container
                    <RoomsFilter />
                    <RoomsList />
                  </div>
                );
            }
        }
    </RoomConsumer>

    );
}

export default RoomsContainer;
