function solution(book_time) {
  const dic = {};
  for (let book in book_time) {
    let start = getTime(book_time[book][0]);
    let end = getTime(book_time[book][1]);
    for (start; start < end + 10; start++) {
      if (!dic[start]) {
        dic[start] = 1;
      } else {
        dic[start]++;
      }
    }
  }
  return Math.max(...Object.values(dic));
}

function getTime(time) {
  time = time.split(':').map(Number);
  return time[0] * 60 + time[1];
}