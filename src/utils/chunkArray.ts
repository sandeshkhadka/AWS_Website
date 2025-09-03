export function chunkAlternating<T>(arr: T[]): T[][] {
  const result: T[][] = [];
  let i = 0;
  let takeFive = true;

  while (i < arr.length) {
    const size = takeFive ? 5 : 4;
    result.push(arr.slice(i, i + size));
    i += size;
    takeFive = !takeFive; // alternate between 5 and 4
  }

  return result;
}
