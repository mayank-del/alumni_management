import React from 'react';
import { useEffect,useState } from 'react';
import axios from "axios";
import "./Event.css";

function Event() {
  const [eventData,setEventData]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:5000/api/events").then(res=>{
          setEventData(res.data)
      })
    },[])
  return (
    <div className='Event'>
        <div className="Event-container">
            <div>
              <h1 className='home-h1'>
                  Events
              </h1>

              <p className='Event-p'>
                  You will find Past Galaries and upcoming event in this page.
              </p>
            </div>
        
        </div>
        
        <div className="eventbox">
          <div className="events-list-header">
            <h1 className='home-h1'>
              List of Events
            </h1>
          </div>
          {eventData.map(event=>(
            <div className="eventCard">
              <h1>
                Unique Id:{event.id}
              </h1>
                <h3>
                   {event.event_name} event will be live on {event.event_date} at {event.event_time} from {event.venue} . {event.event_desc}.
                </h3>
            </div>
          ))}
        </div>
        
    </div>
  )
}

export default Event