function solution(record) {
  let obj = {};
  let arr = [];
  for (let i = 0; i < record.length; i++) {
    arr.push(record[i].split(' '));
    if (arr[i][0] === 'Enter' || arr[i][0] === 'Change') {
      obj[arr[i][1]] = arr[i][2];
    }
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === 'Enter') {
      result.push(`${obj[arr[i][1]]}님이 들어왔습니다.`);
    } else if (arr[i][0] === 'Leave') {
      result.push(`${obj[arr[i][1]]}님이 나갔습니다.`);
    }
  }
  return result;
}