import dns from "dns/promises";

const address = await dns.lookup("telkomuniversity.ac.id");
console.info(address.address);