// import {threadId, parentPort} from "worker_threads";

// parentPort.postMessage("message", (message) => {
//     for (let i = 0; i < message; i++) {
//         console.info(`Thread ${threadId} send message ${i}`);
//         parentPort.postMessage(i);
//     }
//     parentPort.close();
// })

import { threadId, parentPort } from "worker_threads";

parentPort.on("message", (message) => {
    console.info(`Worker ${threadId} menerima angka: ${message}. Memulai loop...`);
    for (let i = 0; i < message; i++) {
        console.info(`Worker ${threadId} mengirim pesan: ${i}`);
        parentPort.postMessage(i);
    }
    parentPort.close();
});