// [1차] 뉴스 클러스터링
// 대문자 소문자 차이 없으므로 모두 대문자로 만들기
// 특수문자,숫자,공백 일때 2글자 변환 x

function solution(str1, str2) {
  const arr1 = makeArray(str1);
  const arr2 = makeArray(str2);

  if (arr1.length == 0 && arr2.length == 0) {
    return 65536;
  }

  const result = makeNumber(arr1, arr2);

  return result;
}

function makeArray(arr) {
  // 대소문자 차이가 없으므로 문자열을 대문자로 모두 변경
  const upper = arr.toUpperCase().split('');
  // 알파벳 A-Z까지 들어있는 배열
  const dictionary = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  let string = '';
  const makeArray = [];
  for (let i = 0; i < upper.length - 1; i++) {
    // 글자 순서대로 2개씩 짝지어서 만듦
    string = upper[i] + upper[i + 1];
    // string 문자열의 첫글자나 두번째 글자가 딕셔너리 배열안의 알파벳이면
    // makeArray  배열에 두글자로 된 문자열 넣기
    if (
      dictionary.indexOf(upper[i]) > -1 &&
      dictionary.indexOf(upper[i + 1]) > -1
    ) {
      makeArray.push(string);
    }
  }
  // 두글자의 문자열의 원소들이 들어 있는 배열 리턴
  return makeArray;
}

function makeNumber(arr1, arr2) {
  const set = [];
  const sum = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      const idx = arr2.indexOf(arr1[i]);
      arr2.splice(idx, 1);
      set.push(arr1[i]);
    } else {
      sum.push(arr1[i]);
    }
  }

  arr2.forEach((t) => sum.push(t));

  return Math.floor((set.length / (set.length + sum.length)) * 65536);
}