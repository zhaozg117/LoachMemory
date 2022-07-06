/********************  组合模式 ********************** */
/**
 * 1. 具有树结构
 * 2. 利用对象多态性统一对待组合对象和单个对象
 * 3. 请求可传递
 */

function MarcoComand() {
  return {
    commandList: [],

    add(command) {
      this.commandList.push(command);
    },

    execute() {
      for (const commond of this.commandList) {
        commond.execute();
      }
    },
  };
}

const openAc = {
  execute: () => {
    console.log("openAC");
  },
};
const openTv = {
  execute: () => {
    console.log("openTv");
  },
};
const openSounde = {
  execute: () => {
    console.log("openSounde");
  },
};
const openDoor = {
  execute: () => {
    console.log("openDoor");
  },
};
const openCompute = {
  execute: () => {
    console.log("openCompute");
  },
};
const openVsCode = {
  execute: () => {
    console.log("openVsCode");
  },
};

const macro1 = new MarcoComand();
macro1.add(openTv);
macro1.add(openSounde);

const macro2 = new MarcoComand();
macro2.add(openAc);
macro2.add(openCompute);
macro2.add(openVsCode);

const macro = new MarcoComand();

macro.add(openDoor);
macro.add(macro1);
macro.add(macro2);

macro2.execute();
macro1.execute();
