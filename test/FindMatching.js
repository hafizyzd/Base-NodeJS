function findMatchingDebits(debitList, creaditTotal){
    const seenAmounts = new Set();

    for(const currentAmount of debitList){
        const requiredPartner = creaditTotal - currentAmount;
        console.log(`requiredPartner: ${requiredPartner}`);
        console.log(`currentAmount: ${currentAmount} \n`);

        if(seenAmounts.has(requiredPartner)){
            return [requiredPartner, currentAmount];
        }

        seenAmounts.add(currentAmount);
    }
    return[];
}

const debits1 = [10000, 50000, 25000, 75000];
const total1 = 100000;
console.log(`Mencari ${total1} di [${debits1}] ->`, findMatchingDebits(debits1, total1));

const debits3 = [50, 20, 10, 40];
const total3 = 50;
console.log(`Mencari ${total3} di [${debits3}] ->`, findMatchingDebits(debits3, total3));