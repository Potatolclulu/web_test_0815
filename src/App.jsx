import React from 'react';
import Hero from './components/Hero';
import Dishes from './components/Dishes';
import History from './components/History';
import Principles from './components/Principles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <div className="seal">和</div>
            <div>
              <div className="brand-name">日本料理</div>
              <div className="brand-sub">Washoku Guide</div>
            </div>
          </div>
          <nav>
            <ul>
              <li><a href="#categories">分類</a></li>
              <li><a href="#dishes">料理</a></li>
              <li><a href="#history">歴史</a></li>
              <li><a href="#principles">精神</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        
        <div className="divider">一汁三菜 · Ichiju Sansai</div>

        <section className="section" id="categories">
          <div className="section-inner">
            <div className="section-head">
              <div className="num">壱</div>
              <div>
                <span className="en">Ⅰ · Categories</span>
                <h2>料理の分類</h2>
              </div>
            </div>
            <div className="categories-grid">
              <div className="cat">
                <span className="icon">🍣</span>
                <h3>寿司・刺身</h3>
                <span className="romaji">Sushi & Sashimi</span>
                <p>新鮮な魚介を米と酢、あるいはそのまま供する、和食の象徴。</p>
              </div>
              <div className="cat">
                <span className="icon">🍜</span>
                <h3>麺類</h3>
                <span className="romaji">Menrui</span>
                <p>ラーメン・蕎麦・うどん。出汁の文化と小麦・蕎麦粉の職人技。</p>
              </div>
              <div className="cat">
                <span className="icon">🍤</span>
                <h3>揚げ物</h3>
                <span className="romaji">Agemono</span>
                <p>天ぷら・唐揚げ・とんかつ。軽やかな衣と素材の持ち味を活かす技法。</p>
              </div>
              <div className="cat">
                <span className="icon">🍲</span>
                <h3>鍋物</h3>
                <span className="romaji">Nabemono</span>
                <p>すき焼き・しゃぶしゃぶ・おでん。食卓を囲む温かな冬の風物詩。</p>
              </div>
              <div className="cat">
                <span className="icon">🍱</span>
                <h3>ご飯物</h3>
                <span className="romaji">Gohanmono</span>
                <p>丼・おにぎり・定食。一汁三菜を基本とした日本の日常食。</p>
              </div>
              <div className="cat">
                <span className="icon">🍡</span>
                <h3>和菓子</h3>
                <span className="romaji">Wagashi</span>
                <p>餡と季節を映す菓子。茶席を彩る、口福の芸術。</p>
              </div>
            </div>
          </div>
        </section>

        <Dishes />
        <History />
        <Principles />
      </main>

      <Footer />
    </div>
  );
}

export default App;
