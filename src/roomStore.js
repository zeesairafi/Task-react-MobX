import { makeObservable, observable, action } from "mobx";
import axios from "axios";


class RoomStore{

    rooms = [];

    constructor() {
        makeObservable(this, {
            rooms: observable,
        fetchRooms: action,
         createRoom: action,
         deleteRoom: action,


        });
}

 fetchRooms = async () => {
    try {
      const response = await axios.get(
        "https://coded-task-axios-be.herokuapp.com/rooms"
      );
      this.rooms=response.data
    } catch (error) {
      console.log(error);
    }
  }

   createRoom = async (newRoom) => {
    try {
      const response = await axios.post(
        "https://coded-task-axios-be.herokuapp.com/rooms",
        newRoom
      );
      this.rooms.push(response.data)
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

   deleteRoom = async (id) => {
    try {
       await axios.delete(
        `https://coded-task-axios-be.herokuapp.com/rooms/${id}`
      );
      let tempRooms = this.rooms.filter((room) => room.id !== id);
      this.rooms = tempRooms
    } catch (error) {
      console.log(error);
    }
  };
}

const roomStore = new RoomStore()
roomStore.fetchRooms();
export default roomStore;