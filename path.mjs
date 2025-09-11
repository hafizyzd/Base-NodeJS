import path from "path";

const file = "user/hafiz/contoh.txt"

console.info(path.dirname(file));
console.info(path.basename(file));
console.info(path.extname(file));
console.info(path.parse(file));