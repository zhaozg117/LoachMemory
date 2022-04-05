export const treeToArray = (tree, children = "children") => {
  return tree.reduce((pre, cur) => {
    return pre.concat(treeToArray(cur[children] || [], children));
  }, []);
};

export const treeToMap = (tree, children = "children", idKey = "id") => {
  return tree.reduce((pre, cur) => {
    return Object.assign(
      pre,
      { [idKey]: cur },
      treeToMap(cur[children] || [], children, idKey)
    );
  }, {});
};

export const dfsTree = (tree, children = "children") => {};

export const bfsTree = (tree, children = "children") => {};

export default {
  treeToArray,
  treeToMap,
  dfsTree,
  bfsTree,
};
