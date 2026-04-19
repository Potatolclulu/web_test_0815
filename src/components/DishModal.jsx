import React from 'react';

export default function DishModal({ dish, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2 className="recipe-title">{dish.name}</h2>
        
        <div style={{ marginBottom: '2rem', textAlign: 'center', fontSize: '3rem' }}>
          {dish.emoji}
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 500 }}>
            料理の特徴
          </h3>
          <p style={{ color: '#666', lineHeight: 1.8 }}>
            {dish.details}
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 500 }}>
            材料
          </h3>
          <ul className="ingredients-list">
            {dish.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 500 }}>
            作り方
          </h3>
          <ol className="cooking-steps">
            {dish.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
}