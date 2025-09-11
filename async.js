function samplePromise(){
    return Promise.resolve("hafiz");
}

async function run(){
    const name = await samplePromise();
    console.info(name);
}

run();