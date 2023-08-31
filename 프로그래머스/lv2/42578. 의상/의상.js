
function solution(clothes) {
    const clothCount = {};

    for (const [name, category] of clothes) {
        if (clothCount[category]) {
            clothCount[category]++;
        } else {
            clothCount[category] = 1;
        }
    }

    let totalCombinations = 1;
    for (const count of Object.values(clothCount)) {
        totalCombinations *= (count + 1);
    }

    return totalCombinations - 1;
}