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

const ihubTask = taskFactory("iHub");
const isdpTask = taskFactory("isdp");
const manualTask = taskFactory("manual");

console.log("asdfsdf:", ihubTask, isdpTask, manualTask);
