export const truncateName = (name: string) => {
  return name.length > 50 ? name.slice(0, 50) + "..." : name;
};
