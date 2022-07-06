/* const FSM = {
  off: {
    change(...args) {
      console.log("curState is off:", args);
      this.button.innerHtml = "切换为Oin";
      console.log(this.button);
      this.curState = FSM.on;
    },
  },
  on: {
    change(...args) {
      console.log("curState is on:", args);
      this.button.innerHtml = "切换为OFF";
      console.log(this.button);
      this.curState = FSM.off;
    },
  },
};

const Light = function () {
  this.curState = FSM.off;
  this.button = null;
};

Light.prototype.init = function () {
  const self = this;
  this.button = {
    innerHtml: "OFF",
  };

  this.button.onSwitch = function (...args) {
    self.curState.change.apply(self, args);
  };
};

 */

class Context {
  state = null;
  setState(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}

class OffState {
  do(context) {
    console.log("cur state is off");
    context.setState(this);
  }
}

class OnState {
  constructor(context) {
    this.context = context;
  }
  do() {
    console.log("cur state is on");
    this.context.setState(this);
  }
}

function stateDemo() {
  const context = new Context();
  const onState = new OnState();

  onState.do(context);
  const offState = new OffState();
  offState.do(context);
}

stateDemo();
