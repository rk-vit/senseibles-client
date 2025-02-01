import React, { useState } from "react";
import "./comp-css/EventDetails.css";
import axios from "axios";
import AddEventForm from "./AddEventForm";
const EventDetails = ({ event, closeModal, onModify, onDelete ,fetchEvents,setIsModalOpen}) => {
  const [updateEvent, setUpdateEvent]=useState([]);
  const [showModifyEvent,setShowModifyEvent] = useState(false);
  const modifyEvent = async()=>{
        alert("Modify clicked");
        try {
          const response = await axios.get("https://senseibles-server.vercel.app/adm-events");
          setUpdateEvent(response.data);
        } catch (err) {
          console.error("Failed to fetch events:", err);
        }
        setShowModifyEvent(true);
  }
  const handleCloseAddEvent = ()=>{
    setShowModifyEvent(false);
  }
  const handleEventAdded = () => {
    fetchEvents(); // Refetch events after a new event is added
    setShowModifyEvent(false); // Close the modal
    setIsModalOpen(false);
  };

  const deleteEvent = async()=>{
        try{
          console.log(event.event_id)
          const response = await axios.delete(`https://senseibles-server.vercel.app/${event.event_id}`);
          setShowModifyEvent(false);
          setIsModalOpen(false);
          fetchEvents();
        }catch(err){
          console.log("Error delete :-",err)
        }
  } 
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}>
          X
        </button>
        <h1>{event.event_name}</h1>
        <img
          src={event.event_image_url || "path/to/default/image.jpg"}
          alt={event.event_name}
          className="event-detail-img"
        />
        <p><strong>Date:</strong> {event.event_date}</p>
        <p><strong>Time:</strong> {event.event_time}</p>
        <p><strong>Location:</strong> {event.event_location}</p>
        <p><strong>Description:</strong> {event.event_description}</p>

        <div className="event-details-actions">
          <button className="modify-btn" onClick={modifyEvent}>
            Modify
          </button>
          <button className="delete-btn" onClick={deleteEvent}>
            Delete
          </button>
        </div>
      </div>
      {showModifyEvent && <AddEventForm formName ="Modify" event={event}  onClose={handleCloseAddEvent} onEventAdded={handleEventAdded} />}
    </div>
  );
};

export default EventDetails;
