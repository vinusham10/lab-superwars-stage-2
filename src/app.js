const PLAYERS = [
    'Spiderman',
    'Captain America',
    'Wonderwoman',
    'Popcorn',
    'Gemwoman',
    'Bolt',
    'Antwoman',
    'Mask',
    'Tiger',
    'Captain',
    'Catwoman',
    'Fish',
    'Hulk',
    'Ninja',
    'Black Cat',
    'Volverine',
    'Thor',
    'Slayer',
    'Vader',
    'Slingo',
  ];
  
  // initialize players with image and strength
  const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
  
    let x = 0;
    while (x < players.length) {
        const y = players[x];
        detailedPlayers.push({
            name: y,
            strength: getRandomStrength(),
            image: 'images/super-' + (x+1) + '.png',
            type: x%2===0 ? "hero":"villain",
            id: x + 1
        });
        x++;
    }
    return detailedPlayers;
  }
  // getting random strength
  const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    let x= Math.ceil(Math.random() * 100);
    return x
  };
  
  
  const view = (playerObj) => {
    let player = document.createElement('div');
    player.classList.add('player');
  
    const elements = ['image', 'name', 'strength'];
  
    for (const elementName of elements) {
      let element = document.createElement(elementName === 'image' ? 'img' : 'div');
      if (elementName === 'image') {
        element.setAttribute('src', playerObj.image);
        element.setAttribute('alt', '');
      }
      if (elementName === 'name') {
        element.className = 'name';
        element.textContent = playerObj.name;
      }
      if (elementName === 'strength') {
        element.textContent = playerObj.strength;
        element.className = 'strength';
      }
      player.appendChild(element);
    }
  
    return player;
  };
  
  const buildPlayers = (players, type) => {
    let fragment = ''; 
  
    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    fragment = document.createElement('div');
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      if (player.type === type) {
        const playerView = view(player);
        fragment.appendChild(playerView);
      }
    }
    return fragment.innerHTML;
  
  };
  // Display players in HTML
  const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(
      players,
      'villain'
    );
  };
  
  window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
  };