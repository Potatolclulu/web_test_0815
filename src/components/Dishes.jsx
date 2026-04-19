import React, { useState } from 'react';
import DishModal from './DishModal';
import { dishesData } from '../data/dishesData';

export default function Dishes() {
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <section id="dishes">
      <h2 className="section-title">代表的な日本料理</h2>
      <div className="dishes-grid">
        {dishesData.map((dish, index) => (
          <div 
            key={index}
            className="dish-card"
            onClick={() => setSelectedDish(dish)}
          >
            <div className="dish-image">{dish.emoji}</div>
            <div className="dish-content">
              <h3 className="dish-name">{dish.name}</h3>
              <p className="dish-description">{dish.description}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedDish && (
        <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
      )}
    </section>
  );
}