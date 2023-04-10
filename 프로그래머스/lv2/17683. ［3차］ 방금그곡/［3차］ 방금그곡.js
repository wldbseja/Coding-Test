// // [3차] 바로 그곡 - lv2

function solution(m, musicinfos) {
  m = m
    .replace(/(C#)/g, 'c')
    .replace(/(D#)/g, 'd')
    .replace(/(F#)/g, 'f')
    .replace(/(G#)/g, 'g')
    .replace(/(A#)/g, 'a');

  const information = [];
  for (let i = 0; i < musicinfos.length; i++) {
    let [start, end, music, code] = musicinfos[i].split(',');
    code = code
      .replace(/(C#)/g, 'c')
      .replace(/(D#)/g, 'd')
      .replace(/(F#)/g, 'f')
      .replace(/(G#)/g, 'g')
      .replace(/(A#)/g, 'a');
    let t = start.split(':');

    t = t.concat(end.split(':'));

    let time = 60 * (t[2] - t[0]) + (t[3] - t[1]);
  
    information.push({
      time: time,
      music: music,
      code: code,
    });
  }

  for (let i = 0; i < information.length; i++) {
    if (information[i].code.length > information[i].time) {
      information[i].code = information[i].code.slice(0, information[i].time);
    } else {
      information[i].code = information[i].code.repeat(
        information[i].time / information[i].code.length + 1
      );
    }
  }

  const result = [];
  for (let i = 0; i < information.length; i++) {
    if (information[i].code.includes(m)) {
      result.push(information[i]);
    }
  }

  result.sort((a, b) => {
    if (a.time > b.time) return -1;
    else if (a.time < b.time) return 1;
    else return 0;
  });

  if (result.length === 0) return '(None)';
  return result[0].music;
}