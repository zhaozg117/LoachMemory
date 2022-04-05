// 观察者模式
class EventBus {
  constructor() {
    this.caches = {};
  }

  track(name, fn) {
    if (!this.caches[name]) {
      this.caches[name] = [];
    }
    this.caches[name].push(fn);
  }

  trigger(key, ...args) {
    for (const fn of this.caches[key]) {
      fn.apply(this, args);
    }
  }

  remove(key, fn) {
    const fns = this.caches[key];
    if (!fns.length) {
      return false;
    }
    if (!fn) {
      fns && (fns.length = 0);
    }

    for (let index = 0; index < fns.length; index++) {
      const _fn = fns[index];
      if (_fn === fn) {
        fns.splice(index, 1);
      }
    }
  }

  clear(key) {
    this.caches[key] = [];
  }
}

// 全家Evnet
const Evnet = (function () {
  const evCaches = {};
  const track = function (evName, evfn) {
    if (!evCaches[evName]) {
      evCaches[evName] = key;
    }
    evCaches[evName].push(evfn);
  };
  const trigger = function (key, ...args) {
    if (!evCaches[key]) {
      return false;
    }
    for (const fn of evCaches[key]) {
      fn.apply(this, args);
    }
  };

  const remove = function (key, fn) {};
  return {
    track,
    trigger,
    remove,
  };
})();

const bus = new EventBus();

class Subject {
  constructor() {
    this.observers = [];
  }

  add(observer) {
    this.observers.push(observer);
  }

  remove(observer) {
    if (!observer) {
      this.observers.slice(0);
      return;
    }
    for (let i = 0; i < this.observers.length; i++) {
      const _ob = this.observers[i];
      if (observer === _ob) {
        this.observers.slice(i, 1);
      }
    }
  }

  notify(subject) {
    if (!this.observers.length) {
      return;
    }
    for (let i = 0; i < this.observers.length; i++) {
      const _ob = this.observers[i];
      _ob.execute(subject);
    }
  }
}

class ObServer {
  constructor(name, fn) {
    this.name = name;
    this.execute = fn;
  }
}

// 发布 - 订阅

class PubSub {
  constructor() {
    this.subMap = new Map();
  }
  // 添加订阅
  subscribe(name, observer) {
    if (!this.subMap.has(name)) {
      this.subMap.set(name, []);
    }
    const _obs = this.subMap.get(name);
    _obs.push(observer);
  }
  // 取消订阅
  unSubScribe(name, observer) {
    if (!name) {
      return false;
    }
    if (!observer) {
      this.subMap.delete(name);
    }

    const _obs = this.subMap.get(name);
    for (let i = 0; i < _obs.length; i++) {
      const _ob = _obs[i];
      if (_ob === observer) {
        _obs.splice(i, 1);
        break;
      }
    }
  }

  // 发布
  publish(name, ...args) {
    if (!this.subMap.has(name)) {
      return false;
    }
    const observers = this.subMap.get(name);
    for (const _ob of observers) {
      _ob.execute(name, ...args);
    }
  }
}

const pubsub = new PubSub();
const ob1 = new ObServer("click", (...args) => {
  console.log("ob1:", args);
});

const ob2 = new ObServer("dbClick", (...args) => {
  console.log("ob2:", args);
});

pubsub.subscribe("click", ob1);
pubsub.subscribe("click", ob2);
pubsub.subscribe("dbClick", ob2);

pubsub.publish("click", 11, 222);
pubsub.publish("dbClick", 333, 444);

console.log("unsubScribe start:");
pubsub.unSubScribe("click", ob2);
pubsub.publish("click", 11, 222);
pubsub.publish("dbClick", 11, 222);
