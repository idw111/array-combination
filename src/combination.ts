export const combination = <T extends any>(...arrays: T[][]): T[][] => {
  if (arrays.length === 1) return arrays[0].map((item) => [item]);
  const [firstArray, ...restArrays] = arrays;
  return combination(...restArrays)
    .map((result) => firstArray.map((item) => [item, ...result]))
    .flat();
};
