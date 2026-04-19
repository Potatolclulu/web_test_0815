import React from 'react';

export default function DishModal({ dish, onClose }) {
  if (!dish) return null;

  return (
    <div className="modal-overlay open" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="閉じる" onClick={onClose}>✕</button>
        <div className="modal-head">
          <div className="modal-mon">{dish.mon}</div>
          <div>
            <h3>{dish.name}</h3>
            <div className="romaji">{dish.romaji} · {dish.catLabel}</div>
          </div>
        </div>
        <div className="modal-body">
          <h4>料理の特徴</h4>
          <p>{dish.details}</p>
          <h4>主な材料</h4>
          <ul>
            {dish.ingredients.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <h4>作り方</h4>
          <ol>
            {dish.steps.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
        </div>
      </div>
    </div>
  );
}
