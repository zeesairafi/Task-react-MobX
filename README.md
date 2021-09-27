# Chatting website

Axios chat frontend.

## Instructions
here are all the APIs:\
1. you need to fetch rooms and list them 
2. create a room 
3. update a room
4. delete a room
5. create a msg

```js
Endpoints:
Fetch all rooms:
Endpoint: https://coded-task-axios-be.herokuapp.com/rooms
GET

Create a room:
Endpoint: https://coded-task-axios-be.herokuapp.com/rooms
Method: POST
Data required: title,image,description

Update a room:
Endpoint: https://coded-task-axios-be.herokuapp.com/rooms/${roomId}
Method: PUT
Data required: title,image,description

Delete a room:
Endpoint: https://coded-task-axios-be.herokuapp.com/rooms/${roomId}
Method: Delete

Create a msg:
Endpoint: https://coded-task-axios-be.herokuapp.com/rooms/msg/${roomId}
Method: POST
Data required: msg


```
