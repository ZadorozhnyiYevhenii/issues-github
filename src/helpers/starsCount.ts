export const starsCount = (count: number) => {
  return count <= 999 ? count : `${Math.floor(count / 1000)}k`;
};
