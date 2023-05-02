function solution(weights) {
  let count = 0;
  const point = [2, 3, 4];
  const map = new Map();
  const temp = new Map();

  weights.forEach((v) => {
    if (!map.has(v)) {
      map.set(v, 1);
    } else {
      count += map.get(v);
      map.set(v, map.get(v) + 1);
    }
  });

  for (const [weight, cnt] of map) {
    for (const points of point) {
      const calculate = weight * points;
      if (!temp.has(calculate)) {
        temp.set(calculate, cnt);
      } else {
        count += temp.get(calculate) * cnt;
        temp.set(calculate, temp.get(calculate) + cnt);
      }
    }
  }

  return count;
}