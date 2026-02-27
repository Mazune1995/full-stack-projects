import React from "react";
import EquipmentCard from "./EquipmentCard";

const CategorySection = ({ category }) => {
  return (
    <div className="category-section">
      <h2>{category.name}</h2>

      <div className="equipment-grid">
        {category.equipments.length > 0 ? (
          category.equipments.map((equipment, index) => (
            <EquipmentCard
              key={index}
              name={equipment.name}
              image={equipment.image}
            />
          ))
        ) : (
          <>
            <EquipmentCard />
            <EquipmentCard />
            <EquipmentCard />
          </>
        )}
      </div>
    </div>
  );
};

export default CategorySection;
