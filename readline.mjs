import readLine from "readline/promises";
import process from "process";


const input = readLine.createInterface({
    input : process.stdin,
    output:  process.stdout,
})

// Membuat fungsi async untuk menggunakan 'await'
const main = async () => {
    try {
        // 'await' akan menjeda eksekusi sampai user memasukkan nama dan menekan Enter
        const name = await input.question("Siapa nama Anda? ");
        console.info(`Halo, ${name}! 👋`);
    } catch (err) {
        console.error("Terjadi error:", err);
    } finally {
        // 'finally' block akan selalu dieksekusi, memastikan interface ditutup
        input.close();
    }
};

// Menjalankan fungsi utama
main();
