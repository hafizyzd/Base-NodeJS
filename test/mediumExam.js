function groupAnagrams(strs){
    const anagramMap = new Map();

    for(const str of strs){
        const sortedKey = str.split('').sort().join();

        if(!anagramMap.has(sortedKey)){
            anagramMap.set(sortedKey, []);
        }

        anagramMap.get(sortedKey).push(str);
    }
    console.log(anagramMap);
    return Array.from(anagramMap.values());
}

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log("Input:", words);
console.log("Output:", groupAnagrams(words));

