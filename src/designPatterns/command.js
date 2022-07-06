// 命令模式
const ManuBtn = {
  refresh() {
    console.log("refresh Task list");
  },
};

RefreshCommand = function (recieve) {
  return {
    execute() {
      recieve.refresh();
    },
  };
};

setComand = function (button, command) {
  button.click = function () {
    command.execute();
  };
};

const command = RefreshCommand(ManuBtn);

setComand(button, command);

class MarcoComand {
  constructor() {
    this.commandStack = [];
  }

  add(command) {
    this.commandStack.push(command);
  }

  execute() {
    for (const command of this.commandStack) {
      command.execute();
    }
  }
}

function setComand(target, func) {
  target.click = function () {
    func();
  };
}

function RefreshCommand(recieve) {
  return {
    execute() {
      recieve.refresh();
    },
  };
}

const player = {
  block() {
    console.log("block");
  },
  run() {
    console.log("run");
  },
  shot() {
    console.log("shot");
  },
  pass() {
    console.log("pass");
  },
};

const initCommond = function (recieve, state) {
  return {
    command() {
      recieve[state]();
    },
  };
};

const keysMap = {
  1: "block",
  2: "run",
  3: "shot",
  4: "pass",
};

const commandStack = [];
document.onkeyup = (ev) => {
  const keyCode = ev.target.keyCode;
  const command = initCommond(player, keysMap[keyCode]);
  if (command) {
    command();
    commandStack.push(command);
  }
};
