import fs from "fs/promises";

const buffer = await fs.readFile("filesystem.mjs");
console.info(buffer.toString());


await fs.writeFile("temp.txt","hello mjs");