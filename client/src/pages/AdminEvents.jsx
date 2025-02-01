import React, { useState, useEffect } from "react";
import axios from "axios";
import EventBox from "../components/EventBox";
import AddEventForm from "../components/AddEventForm";
import EventDetails from "../components/EventDetails"; // Import the EventDetails modal
import "./page-css/AdminEvents.css";

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null); // Store the selected event for details modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  // Function to fetch events
  const fetchEvents = async () => {
    try {
      const response = await axios.get("https://senseibles-server.vercel.app/adm-events");
      setEvents(response.data);
    } catch (err) {
      console.error("Failed to fetch events:", err);
    }
  };

  // Initial fetch on component mount
  useEffect(() => {
    fetchEvents();
  }, []);

  const handleAddEventClick = () => {
    setShowAddEvent(true);
  };

  const handleCloseAddEvent = () => {
    setShowAddEvent(false);
  };

  const handleEventAdded = () => {
    fetchEvents(); // Refetch events after a new event is added
    setShowAddEvent(false); // Close the modal
  };

  // Open the modal with the selected event
  const openEventDetails = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="admin-events">
      <div className="header">
        <h1>Admin Events</h1>
        <button className="add-event-btn" onClick={handleAddEventClick}>
          +
        </button>
      </div>

      <div className="events-grid">
        {events.map((event) => (
          <EventBox
            key={event.event_id}
            event={event}
            openEventDetails={openEventDetails} // Pass openEventDetails function as a prop
            fetchEvents = {fetchEvents}
          />
        ))}
      </div>

      {showAddEvent && <AddEventForm formName ="Add"  onClose={handleCloseAddEvent} onEventAdded={handleEventAdded} />}

      {/* Conditionally render the EventDetails modal */}
      {isModalOpen && selectedEvent && (
        <EventDetails event={selectedEvent} closeModal={closeModal} fetchEvents={fetchEvents} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
};

export default AdminEvents;
