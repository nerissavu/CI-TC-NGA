export async function loan(name, money, date, purposes ) {
    await firebase.firestore().collection("loanings").add({
        name: name,
        money: money,
        date: date,
        purposes: purposes,
        done: false
    });
}
        

