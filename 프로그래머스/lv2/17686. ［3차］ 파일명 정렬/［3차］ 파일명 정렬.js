// [3차] 파일명 정렬

function solution(files) {
  let array = [];
  let numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  files.forEach((file) => {
    const arr = ['', '', ''];
    [...file].forEach((f) => {
      if (numArray.indexOf(f) === -1 && !arr[1].length) {
        arr[0] += f;
      } else if (numArray.indexOf(f) > -1 && !arr[2].length) {
        arr[1] += f;
      } else {
        arr[2] += f;
      }
    });
    array.push(arr);
  });

  array.sort((a, b) => {
    if (a[0].toLowerCase() > b[0].toLowerCase()) {
        return 1
    } else if (a[0].toLowerCase() < b[0].toLowerCase()) {
      return -1;
    } else {
      return Number(a[1]) - Number(b[1]);
    }
  });

  const result = [];
  array.forEach((a) => {
    result.push(a.join(''));
  });
  return result;
}