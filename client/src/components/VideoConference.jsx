import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './VideoCallComponents/VideoPlayer';
import Sidebar from './VideoCallComponents/Sidebar';
import Notifications from './VideoCallComponents/Notifications';
import { NotificationState} from '../Context/UserContext';


const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '800px',
    background:'#28281a',
    color:"yellow",
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));




function VideoConference() {

  const {setVideoOn}=NotificationState();

const classes =useStyles();

  return (
    <div className={classes.wrapper}>
      <button onClick={()=>{setVideoOn({video:true,audio:true})}}>
        Camera
      </button>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className='typo' variant="h2" align="center">Conference</Typography>
      </AppBar>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  )
}

export default VideoConference