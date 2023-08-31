// 베스트앨범 - LV2

function solution(genres, plays) {
    // 각 장르별 곡 정보를 저장할 딕셔너리
    const genreMap = {};
    // 각 장르별 총 재생 수를 저장할 딕셔너리
    const totalTime = {};

    // 곡 정보 저장
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const time = plays[i];

        if (!genreMap[genre]) {
            genreMap[genre] = [];
            totalTime[genre] = 0;
        }


        genreMap[genre].push({ i: i, time: time });
        totalTime[genre] += time;

    }

    // 재생 수가 높은 순으로 정렬
    const sortedGenres = Object.keys(totalTime).sort((a, b) => totalTime[b] - totalTime[a]);


    const answer = [];
    for (const genre of sortedGenres) {
        console.log(genre)
        // 장르 내에서 재생 수에 따라 정렬
        genreMap[genre].sort((a, b) => b.time - a.time);
        // 가장 재생 수가 높은 곡 선택
        answer.push(genreMap[genre][0].i);

        if (genreMap[genre].length > 1) {
            // 두 번째로 재생 수가 높은 곡 선택
            answer.push(genreMap[genre][1].i);
        }
    }

    return answer;
}