// 策略模式

const strategies = {
  // 必须有活动
  hasActs(value, msg) {
    if (!Array.isArray(value) || value.length < 1) {
      return msg;
    }
  },

  multiActHasOwner(acts, msg) {
    muiltActs = acts.filter((e) => e.isMulti);
    const hasEmptyOwner = muiltActs.filter((e) => !e.owner);
    if (hasEmptyOwner) {
      return msg;
    }
  },

  allActHasOwner(acts, msg) {
    if (acts.some((e) => !e.owner)) {
      return msg;
    }
  },

  isSameGroup(acts, msg) {
    const noQcActs = acts.filter((e) => e.type !== "QC");
    notSame = noQcActs.filter((e, index, arr) => {
      return e.ownerType !== "Group" || e.ownerId !== arr[index - 1].ownerId;
    });
    if (notSame) {
      return msg;
    }
  },
};

function Validator() {
  this.cache = [];
}

Validator.prototype.add = function (rule, msg, ...values) {
  this.cache.push(function () {
    return strategies[rule].apply(null, [...values, errorMsg]);
  });
};

Validator.prototype.start = function () {
  for (ValidatorFn of this.cache) {
    let msg = ValidatorFn();
    if (msg) {
      return msg;
    }
  }
};

function validataFunc(task) {
  var validator = new Validator();
  validator.add(task.acts, "hasActs", "活动不能为空");
  validator.add(task.acts, "multiActHasOwner", "多人活动责任人不能为空");
  validator.add(task.acts, "allActHasOwner", "所有责任人必填");
  validator.add(task.acts, "isSameGroup", "非QC活动群组不一致");
  var msg = validator.start();
  return msg;
}

function creatTask(task) {
  const errMsg = validataFunc(task);
  if (errMsg) {
    window.Notification(errMsg);
    return false;
  }
  saveTask(task);
}

/******************* 策略模式 一般类 */

class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  execute(...args) {
    this.strategy.do(...args);
  }
}

class AddStrategy {
  do(n1, n2) {
    return n1 + n2;
  }
}
class MultiplyStrategy {
  do(n1, n2) {
    return n1 * n2;
  }
}
class SubtractStrategy {
  do(n1, n2) {
    return n1 - n2;
  }
}

function test() {
  const add = new AddStrategy();
  const multy = new MultiplyStrategy();
  const substract = new SubtractStrategy();

}
