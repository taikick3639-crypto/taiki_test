const animeData = [
  { name: '葬送のフリーレン', genre: 'ファンタジー / 物語', score: 98, trend: '+12%' },
  { name: '薬屋のひとりごと', genre: '歴史 / 物語', score: 96, trend: '+18%' },
  { name: '勇者パーティー', genre: 'ファンタジー / コメディ', score: 94, trend: '+9%' },
  { name: '名探偵コナン', genre: 'ミステリー / 推理', score: 92, trend: '+5%' },
  { name: 'ブルーロック', genre: 'スポーツ / 戦略', score: 90, trend: '+11%' }
];

const rankingList = document.getElementById('rankingList');
const updatedAt = document.getElementById('updatedAt');
const refreshBtn = document.getElementById('refreshBtn');

function renderRanking(data) {
  rankingList.innerHTML = '';

  const sorted = [...data].sort((a, b) => b.score - a.score);

  sorted.forEach((anime, index) => {
    const item = document.createElement('article');
    item.className = 'rank-item';

    item.innerHTML = `
      <div class="rank-no">${index + 1}</div>
      <div class="rank-main">
        <div>
          <div class="anime-name">${anime.name}</div>
          <div class="meta">${anime.genre}</div>
        </div>
      </div>
      <div class="score-box">
        <div class="score">${anime.score}</div>
        <div class="trend">${anime.trend}</div>
      </div>
    `;

    rankingList.appendChild(item);
  });
}

function refreshRanking() {
  const now = new Date();
  updatedAt.textContent = '更新時刻: ' + now.toLocaleTimeString('ja-JP');

  const shifted = [...animeData].map((item) => ({
    ...item,
    score: Math.max(80, Math.min(99, item.score + (Math.random() * 6 - 3)))
  }));

  renderRanking(shifted);
}

refreshBtn.addEventListener('click', refreshRanking);
renderRanking(animeData);
refreshRanking();
