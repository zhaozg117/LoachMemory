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


