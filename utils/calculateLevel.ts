export const calculateLevel = (experience: number): number => {
  const thresholds = [
    0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
    120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000,
  ];

  for (let i = thresholds.length - 1; i >= 0; i--) {
    if (experience >= thresholds[i]) {
      return i + 1;
    }
  }
  return 1;
};
