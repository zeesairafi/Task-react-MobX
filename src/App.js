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


  

 

  

  
   };
  return (
    <div className="__main">
      <div className="main__chatbody">
        <Switch>
          <Route path="/room/:roomSlug">
            <ChatRoom rooms={rooms}  />
          </Route>
          <Route exact path="/">
            <center>
              <ChatRoomsList
                rooms={rooms}
                
                
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
