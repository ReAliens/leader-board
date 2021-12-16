import { createUserScore, getScores } from './dataMethods.js';

const table = document.querySelector('.scores-table');
const refresh = document.querySelector('.refresh-button');
const username = document.getElementById('name');
const userScore = document.getElementById('score');

const displayData = () => {
  getScores().then((data) => {
    data?.result
      ?.sort((a, b) => b?.score - a?.score)
      ?.map((item) => {
        const row = document.createElement('div');
        const nameSpan = document.createElement('span');
        const scoreSpan = document.createElement('span');

        row.className = 'row';
        nameSpan.innerHTML = `${item.user}: &nbsp;`;
        scoreSpan.innerHTML = item.score;
        row.append(nameSpan, scoreSpan);
        return table.appendChild(row);
      });
  });
};

document.querySelector('.form-data').addEventListener('submit', async (e) => {
  e.preventDefault();
  const userDataObj = { user: username.value, score: userScore.value };
  await createUserScore(userDataObj);
  username.value = '';
  userScore.value = '';
});

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.reload();
});

export default displayData;
