import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import ChatRoomsList from "./components/ChatRoomsList";
import { Route, Switch } from "react-router";
import axios from "axios";
import CreateRoomModal from "./components/CreateRoomModal"
import ChatRoomsList from "./components/ChatRoomsList";
import roomStore from "./roomStore";

function App() {
  // const [rooms, setRooms] = useState([]);

  const rooms = roomStore.rooms;


  

 

  // const updateRoom = async (updatedRoom) => {
  //   try {
  //     const response = await axios.put(
  //       `https://coded-task-axios-be.herokuapp.com/rooms/${updatedRoom.id}`,
  //       updatedRoom
  //     );
  //     let tempRooms = rooms.map((room) =>
  //       room.id === updatedRoom.id ? response.data : room
  //     );
  //     setRooms(tempRooms);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const createMsg = async (roomId, msg) => {
  //   try {
  //     const response = await axios.post(
  //       `https://coded-task-axios-be.herokuapp.com/rooms/msg/${roomId}`,
  //       msg
  //     );
  //     let tempRooms = rooms.map((room) =>
  //       room.id === roomId
  //         ? { ...room, messages: [...room.messages, response.data] }
  //         : room
  //     );
  //     console.log(tempRooms);
  //     setRooms(tempRooms);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className="__main">
      <div className="main__chatbody">
        <Switch>
          <Route path="/room/:roomSlug">
            <ChatRoom rooms={rooms} createMsg={createMsg} />
          </Route>
          <Route exact path="/">
            <center>
              <ChatRoomsList
                rooms={rooms}
                
                updateRoom={updateRoom}
              />
            </center>
          </Route>
        </Switch>
        <CreateRoomModal/>
        <ChatRoomsList/>
      </div>
    </div>
  );
}

export default App;
