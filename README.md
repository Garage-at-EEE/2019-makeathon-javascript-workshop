## Javascript Workshop Code
### Current Version is taken from Garage@EEE Makeathon Night

### Folder Structure
- `basic-syntax`: Javascript document showing basic syntax for javascript
- `todo-list`: Simple React Todo List App 
- `server`: Express server for the Todo List App (uses MongoDB)

### Setup
1. Clone the git repository into your disk
2. Install NodeJS and MongoDB (make sure that mongo.exe is inside your system PATH environment variable)
3. Check installations my running `node -v`, `npm -v` and `mongo`
4. Run `npm install` inside the `server` and `todo-list` folders respectively
5. Create an empty directory `data` under the `server` folder
6. Start mongo daemon using command `mongod --dbpath ./data` inside the `server` directory (in your terminal)
7. Start server using command `babel-node server.js` inside the `server` directory (in new terminal)
8. Start frontend using command `npm start` inside the `todo-list` directory (in new terminal)