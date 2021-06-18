export const calculateCount = (total: number | undefined, perPage: number | undefined): number => {
  if (!total || !perPage) {
    return 0;
  }
  return Math.ceil(total / perPage);
};
