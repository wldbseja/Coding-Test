// 압축 - lv2

function solution(msg) {
  //알파벳 사전
  const dictionary = [
    '0',
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

  const result = [];

  let string = '';
  for (let i = 0; i < msg.length; i++) {
    string += msg[i];

    if (!dictionary.includes(string)) {
      dictionary.push(string);
      result.push(dictionary.indexOf(string.slice(0, -1)));
      string = msg[i];
    }
  }

  result.push(dictionary.indexOf(string));

  return result;
}