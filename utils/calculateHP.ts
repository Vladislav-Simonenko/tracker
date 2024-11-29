export const calculateHealthSegments = (
  current: number,
  max: number,
  buff: number,
  temp: number
) => {
  const totalHp = max + buff + temp;

  const effectiveCurrent = Math.min(current, max);

  return {
    currentPercent: (effectiveCurrent / totalHp) * 100,
    buffPercent: (buff / totalHp) * 100,
    tempPercent: (temp / totalHp) * 100,
    totalHp,
    effectiveCurrent,
  };
};
