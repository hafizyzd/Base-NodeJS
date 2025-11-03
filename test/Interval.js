function mergeSessions(intervals){
    if(intervals.length === 0){
        return [];
    }

    intervals.sort((a,b) => a[0] - b[0]);

    const merged = [intervals[0]]
    console.log(`merged ${merged}`);
    console.log(`intervals ${intervals}`);

    for(let i = 1; i < intervals.length; i++){
        const currentInterval = intervals[i];

        const lastMergedInterval = merged[merged.length - 1];

        const startTimeBaru = currentInterval[0];
        const endTimeBaru = currentInterval[1];
        const endTimeLama = lastMergedInterval[1]

        console.log(`currentInterval: ${currentInterval}`);
        console.log(`startTimeBaru: ${startTimeBaru}`);
        console.log(`endTimeBaru: ${endTimeBaru}`);
        console.log(`endTimeLama: ${endTimeLama}`);

        if(startTimeBaru <= endTimeLama){
            lastMergedInterval[1] = Math.max(endTimeLama, endTimeBaru);
            console.log(lastMergedInterval);
        }else {
            merged.push(currentInterval)
            console.log(merged)
        }
    }
    return merged;
}

const logs1 = [[1, 3], [8, 10], [2, 6], [15, 18]];
console.log("Input:", logs1);
console.log("Output:", mergeSessions(logs1)); // [[1, 6], [8, 10], [15, 18]]
console.log("---");