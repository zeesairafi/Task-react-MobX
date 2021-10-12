# Chatting website

## First things first:
1. fork [this repo](https://github.com/JoinCODED/Task-react-MobX/)
2. clone 
3. `cd ` to the folder
4. `yarn install`
5. `yarn start`

## Instructions
1. `yarn add mobx mobx-react`
2. Create a file called roomStore in src
3. define the room class and inside create an empty array room =[]
4. `import { makeObservable, observable, action } from "mobx";`
5. make a construtore that will make this a store 
6. create a store and export it


## Fetch rooms :
7. move fetchRooms function to the store and modify it (remove setRooms)
8. add fetchRoom as an action in the constructor 
9. in the list component :
    1. `import taskStore from "../taskStore";`
    2. `import { observer } from "mobx-react";`
    3. add useEffect to call fetchRooms
    4.  add observer before component export

## Create a room:
1. move createRoom function to the store 
2. add createRoom as an action in the constructor 
9. in the create room component :
    1. `import taskStore from "../taskStore";`
    2. `import { observer } from "mobx-react";`
    3. call createRoom in the correct place (instead of the old one)
    4.  add observer before component export

## Delete a room :
1. move deleteRoom function to the store 
2. add deleteRoom as an action in the constructor 
9. in the room component :
    1. `import taskStore from "../taskStore";`
    2. `import { observer } from "mobx-react";`
    3. call deleteRoom in the correct place (instead of the old one)
    4.  add observer before component export

## Clean up:
dont forget to clean up the code in App.js and remove room state as you no longer need it !

### Challenge
## Update , Create a msg:
no steps ! its a challenge 

