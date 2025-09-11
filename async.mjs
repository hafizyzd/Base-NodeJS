function samplePromise(){
    return Promise.resolve("hafiz");
}
const name = await samplePromise();
console.info(name);
