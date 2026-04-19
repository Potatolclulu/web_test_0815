import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <span className="kicker">日本の食文化ガイド · Since 2026</span>
          <h1>旬を味わう、<br /><span className="accent">和食の世界</span>へ。</h1>
          <p className="lead">
            四季の移ろいとともに育まれた日本料理。寿司・天ぷら・ラーメンから懐石に至るまで、
            伝統の技と美意識が一皿に凝縮された食文化を、分類・代表的料理・歴史の三つの視点から紐解きます。
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#dishes">料理を見る →</a>
            <a className="btn btn-ghost" href="#history">歴史を知る</a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="kanji">食</div>
          <div className="stamp">和<br />食</div>
          <div className="hero-meta">UNESCO · Intangible Heritage · 2013</div>
        </div>
      </div>
    </section>
  );
}
