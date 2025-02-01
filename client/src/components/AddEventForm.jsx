import React, { useState } from "react";
import axios from "axios";
import "./comp-css/AddEventForm.css";

const AddEventForm = ({ onClose, onEventAdded, formName, event }) => {
  const [formData, setFormData] = useState({
    e_name: event?.event_name || "",
    e_des: event?.event_description || "",
    e_date: event?.event_date ? event.event_date.split("T")[0] : "",
    e_time: event?.event_time || "",
    e_loc: event?.event_location || "",
    e_img: event?.event_image_url || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formName === "Add") {
        await axios.post("https://senseibles-server.vercel.app/adm-events", formData);
      } else if (formName === "Modify" && event?.event_id) {
        await axios.patch(
          `https://senseibles-server.vercel.app/adm-events/${event.event_id}`,
          formData
        );
      }
      onEventAdded(); // Refresh events and close modal
    } catch (err) {
      console.error(`${formName} Event Failed:`, err);
    }
  };

  return (
    <div className="add-event-modal">
      <div className="add-event-form">
        <h2>{formName} Event</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="e_name"
            placeholder="Event Name"
            value={formData.e_name}
            onChange={handleInputChange}
          />
          <textarea
            name="e_des"
            placeholder="Event Description"
            value={formData.e_des}
            onChange={handleInputChange}
          ></textarea>
          <input
            type="date"
            name="e_date"
            value={formData.e_date}
            onChange={handleInputChange}
          />
          <input
            type="time"
            name="e_time"
            value={formData.e_time}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="e_loc"
            placeholder="Event Location"
            value={formData.e_loc}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="e_img"
            placeholder="Event Image URL"
            value={formData.e_img}
            onChange={handleInputChange}
          />
          <div className="form-buttons">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">{formName} Event</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEventForm;
