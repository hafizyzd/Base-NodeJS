const transactions = [
  { id: 't1', accountId: 'a1', amount: 150000, type: 'credit' },
  { id: 't2', accountId: 'a1', amount: 50000, type: 'debit' },
  { id: 't3', accountId: 'a2', amount: 200000, type: 'credit' },
  { id: 't4', accountId: 'a1', amount: 75000, type: 'debit' },
  { id: 't5', accountId: 'a2', amount: 100000, type: 'debit' },
  { id: 't6', accountId: 'a3', amount: 500000, type: 'credit' },
  { id: 't7', accountId: 'a2', amount: 60000, type: 'debit' },
];


const threshold = 75000;

const getProrityTransaction = (transactions, threshold) => {
    const reportData = [];

    for(const tx of transactions){
        if(tx.type === 'debit' && tx.amount >= threshold){
            const formatedTX = {
                tractionID : tx.id,
                account : tx.account,
                amount : tx.amount,
                type : tx.type,
            }
            reportData.push(formatedTX);
        }
    }
    return reportData;
}

const priorityReport = getProrityTransaction(transactions, threshold);
console.log("Report Priority: ");
console.log(priorityReport);