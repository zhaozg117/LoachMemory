export const rondomArr = (length, range) => {
  return Array.from({ length }, () => {
    return Math.floor(Math.random() * range);
  });
};

export default {
  rondomArr,
};
