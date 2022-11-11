const dotenv = require('dotenv');
dotenv.config();
const colors = require('colors');
const express = require('express');
const app = express();
const cors=require("cors");
const http=require("http")
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const alumniRoutes = require('./routes/alumni.routes');
const adminRoutes = require('./routes/admin.routes');
const eventRoutes = require('./routes/events.routes');
const jobRoutes = require('./routes/jobs.routes');
//const chatModel = require('./models/chat')
//const router=require("express").Router();
const chats=require('./routes/chat.routes')


app.use(express.json());
app.use(cors())

app.use('/api/alumni', alumniRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/chats',chats)

app.use(notFound);
app.use(errorHandler);


//Socket.io
const {Server} =require("socket.io");

const server=http.createServer(app)

const io= new Server(server,
    {cors:
        {
            origin:"http://localhost:3000",

}})
//const users={};
//var player = require('play-sound')(opts = {});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
  
    socket.on("join_room", (data) => {
      socket.join(data);
      console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });
  
    socket.on("send_message", (data) => {
      console.log(data);
      //router.post()
      socket.to(data.room).emit("receive_message", data)
      
    });
  
    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id);
    });
  });
  


const PORT = process.env.PORT || 5000;
server.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold))


/* chat model
1.message
2.name of person
3.time
4.room

*/
