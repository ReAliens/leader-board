import data from './data.js';

const table = document.querySelector('.scores-table');

const displayData = () => {
  data.map((item) => {
    const row = document.createElement('div');
    const nameSpan = document.createElement('span');
    const scoreSpan = document.createElement('span');

    row.className = 'row';
    nameSpan.innerHTML = `${item.name}: &nbsp;`;
    scoreSpan.innerHTML = item.score;
    row.append(nameSpan, scoreSpan);
    return table.appendChild(row);
  });
};

export default displayData;
