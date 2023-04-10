function solution(skill, skill_trees) {
  const arr = [];

  const skIndex = [];

  for (let i = 0; i < skill.length; i++) {
    skIndex.push(i);
  }
  for (let i = 0; i < skill_trees.length; i++) {
    const sk = skill.split('');

    const tree = skill_trees[i].split('');
    let string = '';
    for (let j = 0; j < tree.length; j++) {
      if (sk.includes(tree[j])) {
        string += tree[j];
      }
    }
    arr.push(string.split(''));
  }

 

  let array = [];
  for (let i = 0; i < arr.length; i++) {
    const sk = skill.split('');
    let string = '';
    for (let j = 0; j < arr[i].length; j++) {
      string += sk.indexOf(arr[i][j]);
    }
    array.push(string.split('').map(Number));
  }


  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === skIndex[j]) {
        count++;
      }
    }
    if (count === array[i].length) {
      answer++;
    }
  }
  return answer
}