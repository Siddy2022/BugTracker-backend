const socketio = require('socket.io');
const tokenLib = require('./tokenLib');

//importing redisLibrary
const redisLib = require("./redisLib");

const mongoose = require('mongoose');
const shortid = require("shortid")
const UserModel = mongoose.model('UserModel')

const BugsModel = mongoose.model('BugsModel');


const events = require('events');
const eventEmitter = new events.EventEmitter();


let setServer = (server) => {

    let io = socketio.listen(server);
    let myio = io.of('')
    
    myio.on('connection', function(socket){

        //verifying user
        socket.emit("verify-user", "Please Provide AuthToken For Verification")

        socket.on("set-user", (authToken)=>{
            tokenLib.verifyClaimsWithoutSecret(authToken, (err, userdata)=>{
                if(err){
                    socket.emit('auth-error', "Please Provide Correct authToken Details")
                }else{
                    console.log("User is verified");
                    let currentUser = userdata.data;
                    socket.id=currentUser.userId;
                    let fullName = `${currentUser.firstName} ${currentUser.lastName}`
                    let key = currentUser.userId;
                    let value = fullName;                  

                    let setUserOnline = redisLib.setANewOnlineUserInHash("onlineUsersBugTracker", key, value, (err, allOnlineUsers) => {
                        if (err) {
                            logger.error(` error printed 1 : ${err.message}`, "socketLib:SetANewOnlineUserInHash", 10);
                        }
                        else {

                            redisLib.getAllUsersInAHash('onlineUsersBugTracker', (err, result) => {
                                
                                if (err) {
                                    console.log(` error printed : ${err}`);
                                }
                                else {

                                    //placing every user in one global room
                                    //socket.join("globalRoom");
                                    console.log('room joined');
                                    myio.to("globalRoom").emit("onlineUsers",result)
                                    //socket.broadcast.emit('onlineUsers', result);
                                    console.log(result);
                                }
                            });

                        }
                    });//end setNewOnlineUsersInHash

                    socket.fullName = fullName;
                }
            })

        })

        socket.on("disconnect", ()=>{
            console.log("disconnect listened")
            if (socket.id) {
                redisLib.deleteUserFromHash('onlineUsersBugTracker', socket.id);
                redisLib.getAllUsersInAHash('onlineUsersBugTracker', (err, result) => {
                    if (err) {
                        logger.error(err.message, "socketLib:getAllUsersInAHash", 10);
                    }
                    else {

                        console.log('room leaved');
                        socket.leave("globalRoom");
                        myio.to("globalRoom").emit('onlineUsers', result);
                        //socket.broadcast.emit('onlineUsers', result);
                        //console.log(result);

                    }
                });//end getAllUsersInAHash
            }

        })


        //Creating A New List: 
        socket.on("createBug", (userName) => {
            console.log(`Bug added by ${userName}`)
            //socket.broadcast.emit('createBug-res', `${userName} added A New Bug`);
            //myio.emit("createBug-res",`${userName} added a new bug called`)
            socket.broadcast.emit("createBug-res",`${userName} added a new bug`)
        })        
        

        //Update Bug  Title

        socket.on("updateBug",(userName)=>{
            console.log(`BUg details updated by ${userName}`)
            //socket.broadcast.emit('updateBugTitle-res',`${userName} updated A Bug Title`)
            //myio.emit("updateBug-res",`${userName} updated the details of`)
            //myio.to("globalRoom").emit("updateBug-res",`${userName} updated the details of bug`)
            socket.broadcast.emit("updateBug-res",`${userName} updated the details of bug`)

        })


        //comment On Bug  Title

        socket.on("addComment",(userName)=>{
            console.log(`${userName} commented on Bug`)
            //socket.broadcast.emit('updateBugTitle-res',`${userName} updated A Bug Title`)
            //myio.emit("addComment-res",`${userName} commented on bug`)
            socket.broadcast.emit("addComment-res",`${userName} commented on a bug`)

        })


            /**
             * Watch related functionalities
             */

        //add as a watcher:

        socket.on('watch', (data) => {
        BugsModel.findOne({ "bugId": data.bugId }, (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                //Checking already watcher Or Not:

                for (x of result.watchers) {
                    if (x.watcherId == data.watcherId) {
                        return socket.emit("alreadyWatcher", "You are already watcher");
                    }
                    else { }
                }

                //Saving Requests:

                let socketdata = {
                    bugId: data.bugId,
                    watcherId: data.watcherId,
                    watcherName: data.watcherName
                }

                result.watchers.push(socketdata)
                socket.broadcast.emit("savewatch",`${socketdata.watcherName} added as watcher`);
                console.log("Added as Watcher")

                result.save((err, result) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                })
            }
        })
        })







        
    })

}

module.exports = {
    setServer : setServer
}
