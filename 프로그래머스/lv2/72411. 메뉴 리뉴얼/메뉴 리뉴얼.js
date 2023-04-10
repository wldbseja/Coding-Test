function solution(orders, course) {
  const answer = [];
  course.forEach((num) => {
    const obj = {};
    let max = 0;
    orders.forEach((order) => {
      const combinations = getCombinations([...order], num);

      combinations.forEach((combination) => {
        const menu = combination.sort().join('');

        obj[menu] = obj[menu] ? obj[menu] + 1 : 1;
        max = Math.max(...Object.values(obj));
      });
    });
    if (max >= 2) {
      for (key in obj) {
        if (obj[key] === max) {
          answer.push(key);
        }
      }
    }
  });

  return answer.sort();
}

const getCombinations = (arr, num) => {
  const array = [];

  if (num === 1) {
    return arr.map((value) => [value]);
  }

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);

    const combinations = getCombinations(rest, num - 1);

    const attached = combinations.map((combination) => [fixed, ...combination]);

    array.push(...attached);
  });

  return array;
};