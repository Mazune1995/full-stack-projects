import React from "react";

const EquipmentCard = ({ name, image }) => {
  return (
    <div className="equipment-card">
      <div className="image-placeholder">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <div className="empty-image">Image Here</div>
        )}
      </div>
      <h4>{name || "Equipment Name Here"}</h4>
    </div>
  );
};

export default EquipmentCard;
