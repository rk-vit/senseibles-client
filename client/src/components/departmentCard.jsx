import React from 'react';
import './comp-css/DepartmentCard.css';

function DepartmentCard({ icon, name, description }) {
  return (
    <div className="department-card">
      <div className="card-content">
        <img src={icon} alt={`${name} logo`} className="department-icon" />
        <h2 className="department-name">{name}</h2>
        <p className="department-description">{description}</p>
      </div>
    </div>
  );
}

export default DepartmentCard;
