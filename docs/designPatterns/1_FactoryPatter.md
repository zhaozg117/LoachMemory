# 工厂模式
工厂模式不会暴露创建的过程，并且通过公共的接口指向创建的对象

### 意图
定义一个创建接口，让其子类来决定实例化哪一类工厂，创建工厂延迟至子类
### 解决问题
解决接口选择的问题
### 何时使用
不同条件下创建不同实例
### 解决方法
子类实现工厂接口，返回的也是一个抽象的产品
### 优点
1. 调用者只需知道名字就能创建对象
2. 拓展性高，只需拓展一个工厂类
3. 屏蔽具体实现

```
function IhubTask(taskVo = {}) {
  this.sourceType = "iHub";
  this.taskVo = taskVo;
}
function IsdpTask(taskVo = {}) {
  this.sourceType = "isdp";
  this.taskVo = taskVo;
}
function ManualTask(taskVo = {}) {
  this.sourceType = "manual";
  this.taskVo = taskVo;
}

// 工厂模式
function taskFactory(type) {
  if (type === "iHub") {
    return new IhubTask();
  }
  if (type === "isdp") {
    return new IsdpTask();
  }
  return new ManualTask();
}
```
