export const getHealthImage = (healthPercent: number): string => {
  if (healthPercent >= 100) return "/gif/hpGood.gif";
  if (healthPercent >= 75) return "/gif/hpOK.gif";
  if (healthPercent >= 50) return "/gif/hpHalf.gif";
  if (healthPercent >= 25) return "/gif/hpLow.gif";
  if (healthPercent > 0) return "/gif/hpLow.gif";
  return "/gif/dead.gif";
};
