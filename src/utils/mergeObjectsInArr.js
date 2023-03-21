export const mergeObjectsInArr = (array) => {
  return array.reduce((r, c) => Object.assign(r, c), {});
};
