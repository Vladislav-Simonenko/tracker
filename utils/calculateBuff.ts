export const calculateBuff = (stat: number | undefined): number => {
  if (!stat) return 0;
  return Math.floor((stat - 10) / 2);
};
