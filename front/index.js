const baseApiUrl = 'http://localhost:7546/api/v1'
const apiEndpoints = {
  games: '/game',
}
document.getElementById('createButton').addEventListener('click', createNewGame);

const getGamesFromApi = async () => {
  return axios.get(`${baseApiUrl}${apiEndpoints.games}`).then((response) => response).catch((err) => undefined);
}

const fillGamesTable = async () => {
  const games = await getGamesFromApi();
  if (!games) {
    alert('Some Error has ocurred');
  }
  if (games.status == 200) {
    const list = document.getElementById('games');
    const gamesList = games.data;
    list.innerHTML = '';
    gamesList.forEach(game => {
      const item = document.createElement('li');
      item.innerHTML = game.id + ' | ' +game.title + ' - ' + game.price.normal;
      list.appendChild(item);
    })
  }
}

fillGamesTable();

const postNewGameInApi = async (newGame) => {
  return axios.post(`${baseApiUrl}${apiEndpoints.games}`, newGame)
    .then((response) => response)
    .catch((err) => {
      console.log(err);
      return undefined;
    });
}

async function createNewGame() {
  const newGame = {
    title: (document.getElementById('titleInput')).value,
    releaseDate: (new Date((document.getElementById('releaseDateInput')).value)).toISOString(),
    price: {
      normal: (document.getElementById('priceInput')).value,
      release: (document.getElementById('priceInput')).value*1.2,
      promo: (document.getElementById('priceInput')).value*0.8,
    }
  };

  const gameCreated = await postNewGameInApi(newGame);
  if (!gameCreated || gameCreated.status != 200) {
    alert('Error');
  }
  fillGamesTable();
}
