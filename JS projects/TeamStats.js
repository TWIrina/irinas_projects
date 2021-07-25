
const team = {
    _players:[
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        age:13
      },
      {
        firstName: 'Garry',
        lastName: 'Richard',
        age: 14
      }
      ],
    _games:[
      {
        opponet: 'Marcus',
        teamPoints: 7,
        opponetPoints: 9
      },
      {
        opponet: 'Daniel',
        teamPoints: 10,
        opponetPoints: 11
      },
      {
        opponet: 'Phil',
        teamPoints: 7,
        opponetPoints: 8
      }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
     addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this._players.push(player);
    },
    addGame(opponet, teamPoints, opponetPoints) {
      let game = {
        opponet: opponet,
        teamPoints: teamPoints,
        opponetPoints: opponetPoints
      }
      return this._games.push(game);
    },
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa','Leslie', 44);
  team.addPlayer('Bugs','Bunny', 76);
  
  console.log(team._players);
  
  team.addGame('Marcus', 7, 9);
  team.addGame('Daniel', 10, 11);
  team.addGame('Phil', 7, 8);
  
  console.log(team._games);
