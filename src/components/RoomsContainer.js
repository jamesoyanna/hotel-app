
import React from 'react';
import RoomsFilter from "../components/RoomsFilter";
import RoomsList from "../components/RoomsList";
import {withRoomConsumer} from "../context";
import Loading from "../components/Loading";


function RoomContainer({context}){
    const {loading, sortedRooms, rooms} = context;
if(loading){
               return <Loading />
           }
                return (
                  <>
                    <RoomsFilter rooms = {rooms} />
                    <RoomsList rooms= {sortedRooms} />
                  </>
                );
            }
        


export default withRoomConsumer(RoomContainer);









// import React from 'react';
// import RoomsFilter from "../components/RoomsFilter";
// import RoomsList from "../components/RoomsList";
// import {RoomConsumer} from "../context";
// import Loading from "../components/Loading";

// const RoomsContainer = () => {

//     return (

//     <RoomConsumer>
//         {
//             (value)=>{
//                 const { loading, sortedRooms, rooms} = value
//            if(loading){
//                return <Loading />
//            }
//                 return (
//                   <div>
//                     Hello from room container
//                     <RoomsFilter rooms = {rooms} />
//                     <RoomsList rooms= {sortedRooms} />
//                   </div>
//                 );
//             }
//         }
//     </RoomConsumer>

//     );
// }

// export default RoomsContainer;
