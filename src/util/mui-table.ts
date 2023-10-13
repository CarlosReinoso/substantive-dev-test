export const addId = (arr: any) =>
  arr.map((item: any, index: number) => {
    return { ...item, id: index };
  });
