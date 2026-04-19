import React, { useState } from 'react';
import DishModal from './DishModal';
import { dishesData } from '../data/dishesData';

export default function Dishes() {
  const [filter, setFilter] = useState('all');
  const [selectedDish, setSelectedDish] = useState(null);

  const filteredDishes = filter === 'all' 
    ? dishesData 
    : dishesData.filter(d => d.cat === filter);

  return (
    <section className="section" id="dishes" style={{ background: 'linear-gradient(180deg, transparent, rgba(217,207,191,0.35))' }}>
      <div className="section-inner">
        <div className="section-head">
          <div className="num">弐</div>
          <div>
            <span className="en">Ⅱ · Signature Dishes</span>
            <h2>代表的な料理</h2>
          </div>
        </div>

        <div className="dish-filters">
          {[
            { id: 'all', label: 'すべて' },
            { id: 'sushi', label: '寿司・刺身' },
            { id: 'noodle', label: '麺類' },
            { id: 'fried', label: '揚げ物' },
            { id: 'hotpot', label: '鍋物' },
            { id: 'rice', label: 'ご飯物' },
            { id: 'kaiseki', label: '懐石' }
          ].map(cat => (
            <button 
              key={cat.id}
              className={`chip ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="dishes-grid">
          {filteredDishes.map((dish, index) => (
            <article 
              key={index} 
              className="dish"
              onClick={() => setSelectedDish(dish)}
            >
              <div className="dish-visual" style={{ background: dish.bg }}>{dish.emoji}</div>
              <div className="dish-body">
                <div className="dish-cat">{dish.catLabel}</div>
                <h3 className="dish-name">{dish.name}</h3>
                <div className="dish-romaji">{dish.romaji}</div>
                <p className="dish-desc">{dish.desc}</p>
                <div className="dish-tags">
                  {dish.tags.map(tag => (
                    <span key={tag} className="tag">#{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedDish && (
        <DishModal 
          dish={selectedDish} 
          onClose={() => setSelectedDish(null)} 
        />
      )}
    </section>
  );
}
