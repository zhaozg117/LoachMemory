# 抽象工厂模式
抽象工厂模式中，接口是负责创建一个相关对象的工厂，不需要显式指定它们的类。每个生成的工厂都能按照工厂模式提供对象

### 意图
提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类
### 解决问题
解决接口选择的问题
### 何时使用
系统的产品有多于一个的产品族，而系统只消费其中某一族的产品。
### 解决方法
在一个产品族里面，定义多个产品
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
