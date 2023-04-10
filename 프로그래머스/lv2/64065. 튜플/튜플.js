// 튜플 - lv2
// 초기 설정 :
// s 배열을 "," 기준으로 나눠줌 : {{20,111},{111}} -> [ '{{20', '111}', '{111}}' ]
// obj = max 값 체크하기 위한 딕셔너리
// max = obj 딕셔너리 값에서 max 값만 넣는 배열
// array = 최종 결과 리턴할 배열

function solution(s) {
  // s 배열 요소를 콤마 기준으로 나눠줌 : ['{{2}','{2', '1}','{2','1','3}','{2','1','3','4}}']
  const convert = s.split(',');
  const obj = {};
  const max = [];
  const array = [];

  convert.forEach((c) => {
    // convert 요소를 하나씩 나눠줌 : [ '{', '{', '2', '0' ]
    const items = c.split('');
    let string = '';
    const numArray = [];
    // item 요소들이 '{' , '}' 가 아닐 때 마다 combination 에 item 요소를 문자열로 하나씩 합쳐줌
    items.forEach((item) => {
      if (!(item === '{' || item === '}')) {
        string += item;
      }
    });
    // 합친 문자열들을 numArray 배열에 넣어줌
    numArray.push(string);

    // obj에 numArray에 있는 요소를 키로 만들고, 값 을 1로 지정, 같은 요소가 등장하면 +1 해줌
    if (obj[numArray]) {
      obj[numArray] += 1;
    } else {
      obj[numArray] = 1;
    }
  });

  // obj안의 값을 max 배열에 넣고 , 내림차 순 정렬
  for (key in obj) {
    max.push(obj[key]);
    max.sort((a, b) => b - a);
  }

  //max 배열의 요소와 obj 값이 같으면 array 배열에 obj 키를 숫자로 바꿔서 넣어줌
  max.forEach((m) => {
    for (key in obj) {
      if (obj[key] === m) {
        array.push(Number(key));
      }
    }
  });

  return array;
}