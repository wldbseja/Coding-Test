// 다리를 지나는 트럭

function solution(bridge_length, weight, truck_weights) {
    // 다리를 지나는 트럭

    // 현재 경과한 시간을 나타낼 변수 count 초기화
    let count = 0;

    // 다리를 나가는 트럭을 관리할 큐 생성
    const queue = [];

    // 모든 트럭이 다리를 지날 때까지 반복
    while (truck_weights.length > 0 || queue.length > 0) {
        count++; // 시간 경과

        // 큐에 있는 트럭의 경과 시간이 다리 길이와 같으면 큐에서 제거하고 무게를 다시 추가
        if (queue.length > 0 && queue[0].time === bridge_length) {
            weight += queue.shift().weight;
        }

        // 아직 다리에 진입하지 않은 트럭이 있고 다리에 추가 가능한 무게면 큐에 추가
        if (truck_weights[0] <= weight) {
            const truckWeight = truck_weights.shift(); // 다리에 진입한 트럭 무게
            queue.push({ weight: truckWeight, time: 0 }); // 큐에 트럭 추가 및 경과 시간 초기화
            weight -= truckWeight; // 다리 위 무게 조정
        }

        // 큐에 있는 모든 트럭의 경과 시간 증가
        queue.forEach(truck => {
            truck.time++;
        });
    }

    // 모든 트럭이 다리를 지난 시간 반환
    return count;
}