const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const gameID = 'q5rKuLhkeXEydnyPMhDG';

export const gamePost = async () => {
  const req = await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify({ name: 'newGame' }),
    headers: { 'Content-Type': 'application/json' },
  });
  const res = await req.json();
  const id = await res.result.split(' ');
  return id;
};

export const getScores = async () => {
  const req = await fetch(`${baseUrl}/${gameID}/scores`);
  const res = await req.json();
  return res;
};

export const createUserScore = async (userData) => {
  const req = await fetch(`${baseUrl}/${gameID}/scores`, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: { 'Content-Type': 'application/json' },
  });
  const res = await req.json();
  return res;
};
