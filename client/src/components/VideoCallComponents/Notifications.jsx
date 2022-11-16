import React from 'react';
import { Button } from '@material-ui/core';

import { NotificationState} from '../../Context/UserContext';
import "./Video.css";


const Notifications = () => {
  const { answerCall, call, callAccepted } = NotificationState()

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>{call.name} is calling:</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
