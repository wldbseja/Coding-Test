// 프로세스 LV2

function solution(priorities, location) {
    const queue = []
    // 큐에 숫자,현재 인덱스를 같이 넣어줌
    for (let i = 0; i < priorities.length; i++) {
        queue.push([priorities[i], i])
    }

    // 현재 프로세스가 몇번째인지 셀 변수 0으로 초기화
    let count = 0
    while (queue.length > 0) {
        const process = queue.shift()

        // 큐에 남아있는 숫자가 큐에서 꺼낸 숫자보다 크면,
        // 큐의 맨 뒤로 큐에서 꺼낸 숫자를 다시 넣음
        if (queue.some((n) => n[0] > process[0])) {
            queue.push(process)

        } else {
            // 그게 아니라면 큐에서 꺼낸 숫자가 더 크다는거니까
            // 프로세스 순서를 +1 해줌
            count++
            // 큐에서 꺼낸 숫자의 인덱스가 로케이션 숫자랑 같으면
            // 몇번째로 실행했는지를 리턴
            if (process[1] === location) {
                return count
            }
        }

    }
}