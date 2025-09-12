import {URL} from "url";

const tly = new URL("https://telkomuniversity.ac.id/");

console.info(tly.toString());
console.info(tly.href);
console.info(tly.protocol);
console.info(tly.host);
console.info(tly.searchParams);