import React from 'react';

export default function History() {
  return (
    <section className="section" id="history">
      <div className="section-inner">
        <div className="section-head">
          <div className="num">参</div>
          <div>
            <span className="en">Ⅲ · Culinary History</span>
            <h2>日本料理の歴史</h2>
          </div>
        </div>
        <div className="history-wrap">
          <div className="history-copy">
            <p>
              日本料理は、島国という地理と四季折々の自然がもたらす豊かな食材、
              そして大陸から渡ってきた技法と思想を、千年以上にわたって独自に昇華させてきました。
            </p>
            <p>
              「旬を尊び、素材を活かす」という哲学は、縄文の狩猟採集にはじまり、
              仏教の精進、武家の本膳、茶人の懐石、町人の寿司や天ぷら——
              時代ごとの暮らしのなかで磨かれてきたものです。
            </p>
            <p>
              2013年には「和食；日本人の伝統的な食文化」として
              ユネスコ無形文化遺産に登録され、
              今日では世界の料理界に影響を与え続けています。
            </p>
          </div>
          <div className="timeline">
            <div className="era">
              <div className="years">BC 14000 – BC 300 · 縄文〜弥生</div>
              <h4>狩猟採集と稲作の始まり</h4>
              <p>土器で煮炊きする文化が生まれ、弥生期に稲作が伝来。米を中心とする食の原型が形作られた。</p>
            </div>
            <div className="era">
              <div className="years">710 – 1185 · 奈良〜平安</div>
              <h4>大陸文化と貴族の食</h4>
              <p>唐の料理・仏教思想とともに醤・酢・味噌の原型が確立。宮廷では大饗料理が発展した。</p>
            </div>
            <div className="era">
              <div className="years">1185 – 1573 · 鎌倉〜室町</div>
              <h4>精進料理と本膳料理</h4>
              <p>禅宗の広まりで野菜中心の精進料理が発展。武家の儀礼食「本膳料理」が体系化される。</p>
            </div>
            <div className="era">
              <div className="years">1573 – 1868 · 安土桃山〜江戸</div>
              <h4>茶懐石と町人文化の開花</h4>
              <p>千利休により懐石料理が洗練され、江戸では寿司・天ぷら・蕎麦の屋台文化が栄えた。</p>
            </div>
            <div className="era">
              <div className="years">1868 – 現在 · 明治〜令和</div>
              <h4>近代化と世界への発信</h4>
              <p>洋食との融合でカツ・カレー・ラーメンが定着。2013年、和食がユネスコ無形文化遺産に登録された。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
