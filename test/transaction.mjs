// --- DATA INPUT ---
const transactions = [
  { id: 't1', accountId: 'a1', amount: 150000, type: 'credit' },
  { id: 't2', accountId: 'a1', amount: 50000, type: 'debit' },
  { id: 't3', accountId: 'a2', amount: 200000, type: 'credit' },
  { id: 't4', accountId: 'a1', amount: 75000, type: 'debit' },
  { id: 't5', accountId: 'a2', amount: 100000, type: 'debit' },
  { id: 't6', accountId: 'a3', amount: 500000, type: 'credit' },
];

/**
 * Mengelompokkan transaksi berdasarkan accountId menggunakan .reduce()
 * Ini adalah solusi yang paling umum dan efisien (idiomatic).
 */
const groupTransactionsByAccountId = (transactions) => {
  // .reduce() adalah fungsi untuk "mereduksi" sebuah array menjadi satu nilai tunggal.
  // Dalam kasus ini, "nilai tunggal" itu adalah sebuah OBJEK.

  // 'acc' (accumulator) adalah objek yang sedang kita bangun (hasil akhir).
  // 'currentTx' (current transaction) adalah elemen array yang sedang diproses.
  // '{}' adalah nilai awal untuk accumulator (sebuah objek kosong).
  
  return transactions.reduce((acc, currentTx) => {
    // 1. Ambil accountId dari transaksi saat ini
    const accountId = currentTx.accountId;

    // 2. Cek apakah 'acc' (objek kita) SUDAH memiliki key untuk accountId ini
    if (!acc[accountId]) {
      // 3. Jika BELUM ADA, buatkan sebuah array kosong untuk key tersebut
      acc[accountId] = [];
    }

    // 4. Masukkan (push) transaksi saat ini ke dalam array yang sesuai
    acc[accountId].push(currentTx);

    // 5. Kembalikan 'acc' agar bisa dipakai di iterasi selanjutnya
    return acc;
  }, {}); // <-- {} adalah nilai awal accumulator
};

// --- CARA MENJALANKAN ---
const groupedData = groupTransactionsByAccountId(transactions);
console.log(JSON.stringify(groupedData, null, 2));

// -----------------------------------------------------------------
// --- SOLUSI ALTERNATIF (Menggunakan for...of loop) ---
// -----------------------------------------------------------------

/**
 * Solusi alternatif jika Anda tidak nyaman dengan .reduce().
 * Ini menggunakan loop 'for...of' biasa dan hasilnya sama persis.
 */
const groupTransactionsWithLoop = (transactions) => {
  // 1. Buat objek kosong sebagai hasil akhir
  const groupedResult = {};

  // 2. Loop setiap transaksi di dalam array
  for (const currentTx of transactions) {
    // 3. Ambil accountId
    const accountId = currentTx.accountId;

    // 4. Cek apakah key sudah ada di objek hasil
    if (!groupedResult[accountId]) {
      // 5. Jika belum, buat array kosong
      groupedResult[accountId] = [];
    }

    // 6. Push transaksi saat ini ke array yang benar
    groupedResult[accountId].push(currentTx);
  }

  // 7. Kembalikan objek yang sudah terisi
  return groupedResult;
};

// console.log("--- Versi Loop ---");
// const groupedDataLoop = groupTransactionsWithLoop(transactions);
// console.log(JSON.stringify(groupedDataLoop, null, 2));