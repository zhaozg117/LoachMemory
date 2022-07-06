const playerDirector = (function () {
  const players = {};
  const operators = {};
  operators.addplayer = function (player) {
    // players[player.name] = player;
    const teamColor = player.teamColor;
    players[teamColor] = players[teamColor] || [];
    players[teamColor].push(player);
  };

  operators.remvoePlayer = function (player) {
    const teamColor = player.teamColor;
    const team = players[teamColor] || [];
    for (let i = 0; i < team.length; i++) {
      if (player === team[i]) {
        team.splice(i, 1);
      }
    }
  };

  /****************玩家换队***************************/
  operators.changeTeam = function (player, newTeamColor) {
    // 玩家换队
    operators.removePlayer(player); // 从原队伍中删除
    player.teamColor = newTeamColor; // 改变队伍颜色
    operators.addPlayer(player); // 增加到新队伍中
  };
  operators.playerDead = function (player) {
    // 玩家死亡
    var teamColor = player.teamColor,
      teamPlayers = players[teamColor]; // 玩家所在队伍
    var all_dead = true;
    for (var i = 0, player; (player = teamPlayers[i++]); ) {
      if (player.state !== "dead") {
        all_dead = false;
        break;
      }
    }
    if (all_dead === true) {
      // 全部死亡
      for (var i = 0, player; (player = teamPlayers[i++]); ) {
        player.lose(); // 本队所有玩家 lose
      }
      for (var color in players) {
        if (color !== teamColor) {
          var teamPlayers = players[color]; // 其他队伍的玩家
          for (var i = 0, player; (player = teamPlayers[i++]); ) {
            player.win(); // 其他队伍所有玩家 win
          }
        }
      }
    }
  };

  var reciveMessage = function () {
    var message = Array.prototype.shift.call(arguments); // arguments 的第一个参数为消息名称
    operators[message].apply(this, arguments);
  };
  return {
    reciveMessage: reciveMessage,
  };
})();

class Director {
  const;
  constructor() {
    this.players = {};
    this.operations = {};
  }
  addPlayer(player) {
    this.players[player.teamColor] = this.players[player.teamColor] || [];
    this.players[player.teamColor].push(player);
  }
  removePlayer(player) {
    const teamColor = player.teamColor;
    const team = this.players[teamColor] || [];
    for (let i = 0; i < team.length; i++) {
      if (player === team[i]) {
        team.splice(i, 1);
      }
    }
  }
  changeTeam(player, newTeamColor) {
    // 玩家换队
    this.removePlayer(player); // 从原队伍中删除
    player.teamColor = newTeamColor; // 改变队伍颜色
    this.addPlayer(player); // 增加到新队伍中
  }
  playerDead(player) {
    // 玩家死亡
    var teamColor = player.teamColor,
      teamPlayers = this.players[teamColor]; // 玩家所在队伍
    var all_dead = true;
    for (var i = 0, player; (player = teamPlayers[i++]); ) {
      if (player.state !== "dead") {
        all_dead = false;
        break;
      }
    }
  }
  reciveMessage(message, ...args) {
    this.operations[message].apply(this, args);
  }
}

class Meditor {
  #players = {};
  #operations = {
    addPlayer(player) {
      this.#players[player.teamColor] = this.#players[player.teamColor] || [];
    },
    removePlayer(player) {
      const teamColor = player.teamColor;
      const team = this.#players[teamColor] || [];
      for (let i = 0; i < team.length; i++) {
        if (player === team[i]) {
          team.splice(i, 1);
        }
      }
    },
    changeTeam(player, newTeamColor) {
      // 玩家换队
      this.#removePlayer(player); // 从原队伍中删除
      player.teamColor = newTeamColor; // 改变队伍颜色
      this.#addPlayer(player); // 增加到新队伍中
    },
    playerDead(player) {
      // 玩家死亡
      var teamColor = player.teamColor,
        teamPlayers = this.#players[teamColor]; // 玩家所在队伍
      var all_dead = true;
      for (var i = 0, player; (player = teamPlayers[i++]); ) {
        if (player.state !== "dead") {
          all_dead = false;
          break;
        }
      }
      if (all_dead === true) {
        // 全部死亡
        for (var i = 0, player; (player = teamPlayers[i++]); ) {
          player.lose(); // 本队所有玩家 lose
        }
        for (var color in this.#players) {
          if (color !== teamColor) {
            var teamPlayers = this.#players[color]; // 其他队伍的玩家
            for (var i = 0, player; (player = teamPlayers[i++]); ) {
              player.win(); // 其他队伍所有玩家 win
            }
          }
        }
      }
    },
  };

  recieveMessage(message, ...args) {
    this.#operations[message].apply(this, args);
  }
}

function Player(name, teamColor) {
  this.name = name;
  this.teamColor = teamColor;
  this.state = "live";
}

Player.prototype.win = function () {
  console.log(this.name + " win");
};
Player.prototype.lost = function () {
  console.log(this.name + " lost");
};
Player.prototype.die = function () {
  this.state = "dead";
  playerDirector.reciveMessage("playerDie", this);
};
Player.prototype.remvoe = function () {
  playerDirector.reciveMessage("removePlayer", this);
};
Player.prototype.changeTeam = function (teamColor) {
  playerDirector.reciveMessage("changeTame", this, teamColor);
};

playerFactory = function (name, teamColor) {
  const player = new Player(name, teamColor);
  playerDirector.reciveMessage("addPlayer", player);
  return player;
};
