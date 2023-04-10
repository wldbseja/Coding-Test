// 할인 행사 - lv2

function solution(want, number, discount) {
  const dic = {};
  // 주인공이 원하는 제품 딕셔너리 키랑 값 0 으로 만듦
  for (let i = 0; i < want.length; i++) {
    dic[want[i]] = 0;
  }

  const arr = makeArray(discount);

  const days = makeDays(dic, arr, number, want);

  // 날짜 총 일수가 0이라면 충족된게 없으므로 리턴 0
  if (days === 0) {
    return 0;
  }

  // 그게 아니라면 총 일수 리턴
  return days;
}

// 열흘 기준으로 arr
// 인덱스 오른쪽으로 갈 수록 열흘 기준으로 안나오기 때문에 열흘 기준 일 때만 넣기
function makeArray(array) {
  const maxDay = 10;
  let start = 0;
  let end = 10;
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    const length = array.slice(start, end).length;

    if (length === maxDay) {
      arr.push(array.slice(start, end));
    }
    start++;
    end++;
  }
  return arr;
}

// 총 일수 만드는 함수
function makeDays(dic, array, number, want) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    for (key in dic) {
      dic[key] = 0;
      for (let j = 0; j < array[i].length; j++) {
        // 키랑 array 요소 같으면 키값 ++
        if (key === array[i][j]) {
          dic[array[i][j]]++;
        }
      }
    }
    // 딕셔너리 키값 넣은 배열 만들기
    arr.push(Object.values(dic));
  }

  let days = 0;
  const result = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr[i].length; j++) {
      // 딕셔너리 키 값이 정현이가 원하는 제품 수량보다 같거나 크면 count++
      if (arr[i][j] >= number[j]) {
        count++;
      }
      // count가 want 길이랑 같다면 모두 충족했으므로 날짜 총 일수 ++
      if (count >= want.length) {
        days++;
      }
    }
  }
  return days;
}
